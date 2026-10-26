import { CategoryBudget } from '../models/category-budget.model';
import { toCategoryBudget } from './category-budgets';
import { computeInsights } from './insights';

function b(name: string, spent: number): CategoryBudget {
  return toCategoryBudget({ name, color: '#000000', monthlyLimit: 10000 }, Math.round(spent * 100));
}

describe('computeInsights', () => {
  it('finds the biggest % increase and decrease and the savings', () => {
    const current = [b('Food', 1500), b('Transport', 500), b('Rent', 20000), b('Health', 0)];
    const previous = [b('Food', 1000), b('Transport', 1000), b('Rent', 20000), b('Health', 400)];
    const [up, down, saved] = computeInsights(current, previous, { income: 50000, spent: 22000 }, 'September');

    expect(up.tone).toBe('up');
    expect(up.badge).toBe('↑ 50%');
    expect(up.text).toBe('Food spending is up from ₹1,000 in September to ₹1,500.');
    // Health dropped 400 -> 0 (100%), more than Transport's 50%. Rent is unchanged and never counts.
    expect(down.tone).toBe('down');
    expect(down.badge).toBe('↓ 100%');
    expect(down.text).toBe('Health costs dropped from ₹400 to ₹0.');
    expect(saved.tone).toBe('saved');
    expect(saved.badge).toBe('56% saved');
    expect(saved.text).toBe('You kept ₹28,000 of your ₹50,000 income this month.');
  });

  it('falls back when nothing went up or down', () => {
    const same = [b('Food', 1000)];
    const [up, down] = computeInsights(same, [b('Food', 1000)], { income: 1000, spent: 1000 }, 'May');
    expect(up.badge).toBe('No increase');
    expect(up.text).toBe('No category spent more than in May.');
    expect(down.badge).toBe('No decrease');
  });

  it('says there is nothing to compare when the previous month had no spending', () => {
    const [up, down] = computeInsights([b('Food', 1000)], [b('Food', 0)], { income: 5000, spent: 1000 }, 'March');
    expect(up.tone).toBe('neutral');
    expect(up.text).toBe('No spending in March to compare with.');
    expect(down.text).toBe('No spending in March to compare with.');
  });

  it('reports overspending against income', () => {
    const [, , savings] = computeInsights([b('Food', 1200)], [b('Food', 1000)], { income: 1000, spent: 1200 }, 'June');
    expect(savings.tone).toBe('overspent');
    expect(savings.badge).toBe('20% overspent');
    expect(savings.text).toBe('You spent ₹200 more than your ₹1,000 income this month.');
  });

  it('handles a month with no income', () => {
    const [, , savings] = computeInsights([b('Food', 100)], [b('Food', 100)], { income: 0, spent: 100 }, 'June');
    expect(savings.tone).toBe('neutral');
    expect(savings.badge).toBe('No income');
  });

  it('shows <1% for a tiny non-zero change', () => {
    const [up] = computeInsights([b('Food', 1001)], [b('Food', 1000)], { income: 5000, spent: 1001 }, 'July');
    expect(up.badge).toBe('↑ <1%');
  });

  it('writes amounts converted to the selected currency (percentages stay from rupees)', () => {
    const [up, down, saved] = computeInsights([b('Food', 1500), b('Health', 0)], [b('Food', 1000), b('Health', 400)],
      { income: 120000, spent: 1500 }, 'September', 'USD');
    expect(up.text).toBe('Food spending is up from $11.36 in September to $17.05.');
    expect(up.badge).toBe('↑ 50%');
    expect(down.text).toBe('Health costs dropped from $4.55 to $0.00.');
    expect(saved.text).toBe('You kept $1,346.59 of your $1,363.64 income this month.');
    expect(saved.badge).toBe('99% saved');
    const [, , over] = computeInsights([], [], { income: 1000, spent: 1200 }, 'May', 'GBP');
    expect(over.text).toBe('You spent £1.71 more than your £8.55 income this month.');
  });

  it('treats an overspend that shows as zero in the currency as on budget (0% saved)', () => {
    // Expenses = income + ₹0.30: $0.00 / ₹0 in USD and INR, ¥1 in JPY.
    const summary = { income: 75000, spent: 75000.3 };
    ['USD', 'INR'].forEach((code: any) => {
      const [, , savings] = computeInsights([], [], summary, 'May', code);
      expect(savings.tone).toBe('saved');
      expect(savings.badge).toBe('0% saved');
    });
    expect(computeInsights([], [], summary, 'May', 'USD')[2].text).toBe('You kept $0.00 of your $852.27 income this month.');
    expect(computeInsights([], [], summary, 'May', 'INR')[2].text).toBe('You kept ₹0 of your ₹75,000 income this month.');
    const [, , jpy] = computeInsights([], [], summary, 'May', 'JPY');
    expect(jpy.tone).toBe('overspent');
    expect(jpy.badge).toBe('<1% overspent');
    expect(jpy.text).toBe('You spent ¥1 more than your ¥129,310 income this month.');
  });

  it('keeps a normal overspend overspent in every currency', () => {
    ['INR', 'USD', 'JPY'].forEach((code: any) => {
      const [, , savings] = computeInsights([], [], { income: 75000, spent: 75500 }, 'May', code);
      expect(savings.tone).toBe('overspent');
      expect(savings.badge).toBe('1% overspent');
    });
    expect(computeInsights([], [], { income: 75000, spent: 75500 }, 'May', 'USD')[2].text)
      .toBe('You spent $5.68 more than your $852.27 income this month.');
  });

  it('ignores a month-over-month change that shows as zero in the currency', () => {
    // Food ₹1,000.00 -> ₹1,000.30 is +$0.00 in USD (no increase) but +₹0 in INR too; Rent +₹500 still counts.
    const [up] = computeInsights([b('Food', 1000.3), b('Rent', 1500)], [b('Food', 1000), b('Rent', 1000)],
      { income: 5000, spent: 2500 }, 'May', 'USD');
    expect(up.text).toBe('Rent spending is up from $11.36 in May to $17.05.');
    const [onlyTiny] = computeInsights([b('Food', 1000.3)], [b('Food', 1000)], { income: 5000, spent: 1000 }, 'May', 'USD');
    expect(onlyTiny.badge).toBe('No increase');
    const [inJpy] = computeInsights([b('Food', 1000.3)], [b('Food', 1000)], { income: 5000, spent: 1000 }, 'May', 'JPY');
    expect(inJpy.badge).toBe('↑ <1%');
  });
});
