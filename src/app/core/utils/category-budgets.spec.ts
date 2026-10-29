import { CategoryBudget } from '../models/category-budget.model';
import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import {
  adjustStatusForCurrency, budgetStatus, computeCategoryBudgets, displayedLeft, needsAttention, toCategoryBudget
} from './category-budgets';
import { CurrencyCode, formatMoney } from './money';

const FOOD: Category = { name: 'Food', color: '#e0812f', monthlyLimit: 100 };

function spend(category: string, amount: number, id: string): Transaction {
  return { id, date: '2026-10-05', description: 'x', category, amount, type: 'expense' };
}

describe('budgetStatus (paise)', () => {
  // Limit ₹100 = 10000 paise.
  it('is on track below 85%', () => {
    expect(budgetStatus(8499, 10000)).toBe('on-track');
  });

  it('is close from exactly 85% to just under 100%', () => {
    expect(budgetStatus(8500, 10000)).toBe('close');
    expect(budgetStatus(9999, 10000)).toBe('close');
  });

  it('is at the limit at exactly 100%', () => {
    expect(budgetStatus(10000, 10000)).toBe('at-limit');
  });

  it('is over above 100%', () => {
    expect(budgetStatus(10001, 10000)).toBe('over');
  });

  it('treats a zero limit as on track at 0 and over when anything is spent', () => {
    expect(budgetStatus(0, 0)).toBe('on-track');
    expect(budgetStatus(1, 0)).toBe('over');
  });
});

describe('toCategoryBudget', () => {
  it('maps 84.99 / 85 / 99.99 / 100 / 100.01 rupees of a ₹100 limit to the right status and label', () => {
    const cases: [number, string, number][] = [
      [8499, 'on-track', 84], [8500, 'close', 85], [9999, 'close', 99], [10000, 'at-limit', 100], [10001, 'over', 101]
    ];
    cases.forEach(([paise, status, percent]) => {
      const b = toCategoryBudget(FOOD, paise);
      expect(b.status).toBe(status);
      expect(b.percentUsed).toBe(percent);
      expect(b.barPercent).toBe(Math.min(100, percent));
    });
    expect(toCategoryBudget(FOOD, 10001).overBy).toBe(0.01);
  });
});

describe('computeCategoryBudgets', () => {
  it('sums expenses per category in paise, so 0.1 + 0.2 reaches a 0.3 limit exactly', () => {
    const small: Category = { name: 'Snacks', color: '#2a9d8f', monthlyLimit: 0.3 };
    const [b] = computeCategoryBudgets([spend('Snacks', 0.1, 'a'), spend('Snacks', 0.2, 'b')], [small]);
    expect(b.spent).toBe(0.3);
    expect(b.status).toBe('at-limit');
  });

  it('keeps category order, ignores income and unknown categories', () => {
    const rent: Category = { name: 'Rent', color: '#5b6cf0', monthlyLimit: 1000 };
    const income: Transaction = { id: 'i', date: '2026-10-01', description: 'Pay', category: 'Food', amount: 999, type: 'income' };
    const result = computeCategoryBudgets([spend('Food', 20, 'a'), spend('Gone', 50, 'b'), income], [rent, FOOD]);
    expect(result.map(r => r.name)).toEqual(['Rent', 'Food']);
    expect(result[1].spent).toBe(20);
    expect(result[0].spent).toBe(0);
  });
});

describe('needsAttention', () => {
  function budget(name: string, spentPaise: number): CategoryBudget {
    return toCategoryBudget({ name, color: '#000000', monthlyLimit: 100 }, spentPaise);
  }

  it('orders over, then at limit, then close (highest ratio first in each group) and drops on-track', () => {
    const list = [
      budget('Close90', 9000), budget('OnTrack', 1000), budget('Over110', 11000), budget('AtLimit', 10000),
      budget('Over150', 15000), budget('Close86', 8600)
    ];
    expect(needsAttention(list).map(b => b.name)).toEqual(['Over150', 'Over110', 'AtLimit', 'Close90', 'Close86']);
  });

  it('is empty when everything is on track', () => {
    expect(needsAttention([budget('A', 0), budget('B', 8499)])).toEqual([]);
  });
});

describe('adjustStatusForCurrency (status from the displayed amounts)', () => {
  const RENT: Category = { name: 'Rent', color: '#5b6cf0', monthlyLimit: 10000 };
  const overBy = (paise: number) => toCategoryBudget(RENT, 1000000 + paise);
  const shownOver = (b: CategoryBudget, code: CurrencyCode) => formatMoney(b.overBy, code);

  it('reads At limit when the displayed spent and limit are equal (₹0.01 over everywhere, ₹0.40 in USD/INR/EUR)', () => {
    const cases: [number, CurrencyCode][] = [
      [1, 'USD'], [1, 'JPY'], [1, 'INR'], [1, 'EUR'], [1, 'GBP'], [40, 'USD'], [40, 'INR'], [40, 'EUR']
    ];
    cases.forEach(([paise, code]) => {
      const shown = adjustStatusForCurrency(overBy(paise), code);
      expect(shown.status).toBe('at-limit');
      expect(shown.overBy).toBe(0);
      expect(shown.percentUsed).toBe(100);
      expect(shown.barPercent).toBe(100);
      expect(formatMoney(displayedLeft(shown, code), code)).toBe(formatMoney(0, code));
    });
  });

  it('reads Over by the displayed difference when the displayed spent is higher', () => {
    // ₹10,000.40 is ¥17,242 against a ¥17,241 limit.
    const jpy = adjustStatusForCurrency(overBy(40), 'JPY');
    expect(jpy.status).toBe('over');
    expect(shownOver(jpy, 'JPY')).toBe('¥1');
    // ₹1,000.56 of ₹1,000 is $11.37 of $11.36: over by $0.01.
    const usd = adjustStatusForCurrency(toCategoryBudget({ name: 'Food', color: '#000000', monthlyLimit: 1000 }, 100056), 'USD');
    expect(formatMoney(usd.spent, 'USD') + ' of ' + formatMoney(usd.limit, 'USD')).toBe('$11.37 of $11.36');
    expect(usd.status).toBe('over');
    expect(shownOver(usd, 'USD')).toBe('$0.01');
    // EUR: ₹1,234.76 spent of ₹1,234.40 is €12.11 of €12.10 -> Over by €0.01, not At limit.
    const eur = adjustStatusForCurrency(toCategoryBudget({ name: 'Bills', color: '#000000', monthlyLimit: 1234.4 }, 123476), 'EUR');
    expect(formatMoney(eur.spent, 'EUR') + ' of ' + formatMoney(eur.limit, 'EUR')).toBe('€12.11 of €12.10');
    expect(eur.status).toBe('over');
    expect(shownOver(eur, 'EUR')).toBe('€0.01');
    // ₹11,500 of ₹10,000 is $130.68 of $113.64: over by $17.04.
    const big = adjustStatusForCurrency(overBy(150000), 'USD');
    expect(big.status).toBe('over');
    expect(shownOver(big, 'USD')).toBe('$17.04');
  });

  it('reads At limit in JPY when ¥2,129 is spent of ¥2,129, though rupees are over', () => {
    // ₹1,235.10 spent of ₹1,234.90: ¥2,129.48 and ¥2,129.14, both shown as ¥2,129.
    const b = toCategoryBudget({ name: 'Health', color: '#000000', monthlyLimit: 1234.9 }, 123510);
    expect(b.status).toBe('over');
    const jpy = adjustStatusForCurrency(b, 'JPY');
    expect(formatMoney(jpy.spent, 'JPY') + ' of ' + formatMoney(jpy.limit, 'JPY')).toBe('¥2,129 of ¥2,129');
    expect(jpy.status).toBe('at-limit');
    expect(jpy.overBy).toBe(0);
  });

  it('reads At limit when the displayed amounts are equal though rupees are just under (₹9,999.60 of ₹10,000)', () => {
    const b = toCategoryBudget(RENT, 999960);
    expect(b.status).toBe('close');
    expect(adjustStatusForCurrency(b, 'INR').status).toBe('at-limit');
    expect(b.percentUsed).toBe(99);
    expect(adjustStatusForCurrency(b, 'INR').percentUsed).toBe(100);
    expect(adjustStatusForCurrency(b, 'INR').barPercent).toBe(100);
    ['EUR', 'GBP', 'JPY'].forEach((code: any) => {
      const shown = adjustStatusForCurrency(b, code);
      expect(formatMoney(shown.spent, code)).toBe(formatMoney(shown.limit, code));
      expect(shown.status).toBe('at-limit');
      expect(shown.percentUsed).toBe(100);
      expect(shown.barPercent).toBe(100);
    });
    // In USD they differ ($113.63 of $113.64), so the rupee status stands.
    expect(adjustStatusForCurrency(b, 'USD').status).toBe('close');
    expect(adjustStatusForCurrency(b, 'USD').percentUsed).toBe(99);
    expect(adjustStatusForCurrency(b, 'USD').barPercent).toBe(99);
  });

  it('gives the left amount as the displayed limit minus the displayed spending', () => {
    // ₹1,000 limit, ₹500.40 spent: $11.36 - $5.69 = $5.67 (rupee-based would be $5.68).
    const b = adjustStatusForCurrency(toCategoryBudget({ name: 'Food', color: '#000000', monthlyLimit: 1000 }, 50040), 'USD');
    expect(formatMoney(b.spent, 'USD')).toBe('$5.69');
    expect(formatMoney(displayedLeft(b, 'USD'), 'USD')).toBe('$5.67');
    expect(formatMoney(displayedLeft(overBy(150000), 'USD'), 'USD')).toBe('$0.00');
  });

  it('leaves other statuses and the stored budget untouched', () => {
    const original = overBy(40);
    adjustStatusForCurrency(original, 'USD');
    expect(original.status).toBe('over');
    const onTrack = toCategoryBudget(RENT, 100);
    expect(adjustStatusForCurrency(onTrack, 'USD')).toBe(onTrack);
  });

  it('groups an adjusted category with at-limit in Needs attention', () => {
    const list = [overBy(40), overBy(150000), toCategoryBudget(FOOD, 10000)].map(b => adjustStatusForCurrency(b, 'USD'));
    expect(needsAttention(list).map(b => b.status)).toEqual(['over', 'at-limit', 'at-limit']);
  });
});
