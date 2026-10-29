import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import { formatMoney } from './money';
import { adjustSummaryForCurrency, computeMonthSummary } from './month-summary';

function txn(id: string, type: 'income' | 'expense', amount: number): Transaction {
  return { id, date: '2026-10-05', description: id, category: type === 'income' ? 'Salary' : 'Food', amount, type };
}

const CATEGORIES: Category[] = [
  { name: 'Food', color: '#e0812f', monthlyLimit: 100.1 },
  { name: 'Rent', color: '#5b6cf0', monthlyLimit: 200.2 }
];

describe('computeMonthSummary', () => {
  it('sums income (with its count), spending and the total of all limits', () => {
    const s = computeMonthSummary([txn('i1', 'income', 500), txn('i2', 'income', 250.5), txn('e1', 'expense', 100)], CATEGORIES);
    expect(s.income).toBe(750.5);
    expect(s.incomeCount).toBe(2);
    expect(s.spent).toBe(100);
    expect(s.totalBudget).toBe(300.3);
    expect(s.left).toBe(200.3);
    expect(s.isOverBudget).toBe(false);
    expect(s.overBy).toBe(0);
  });

  it('rounds float noise to paise (0.1 + 0.2 spends 0.3)', () => {
    const s = computeMonthSummary([txn('e1', 'expense', 0.1), txn('e2', 'expense', 0.2)], CATEGORIES);
    expect(s.spent).toBe(0.3);
  });

  it('reports overspending', () => {
    const s = computeMonthSummary([txn('e1', 'expense', 400.3)], CATEGORIES);
    expect(s.isOverBudget).toBe(true);
    expect(s.overBy).toBe(100);
    expect(s.left).toBe(-100);
    expect(s.spentRatio).toBeCloseTo(400.3 / 300.3, 10);
  });

  it('handles an empty month and no categories', () => {
    const s = computeMonthSummary([], []);
    expect(s.income).toBe(0);
    expect(s.spent).toBe(0);
    expect(s.totalBudget).toBe(0);
    expect(s.spentRatio).toBe(0);
    expect(s.isOverBudget).toBe(false);
  });
});

describe('adjustSummaryForCurrency (from the displayed totals)', () => {
  const LIMITS: Category[] = [{ name: 'Food', color: '#e0812f', monthlyLimit: 1000 }];

  it('is on budget when the displayed totals are equal, though rupees are over', () => {
    // ₹1,000.10 of ₹1,000: $11.36 / €9.80 / ₹1,000 / ¥1,724 on both sides.
    const summary = computeMonthSummary([txn('a', 'expense', 1000.1)], LIMITS);
    expect(summary.isOverBudget).toBe(true);
    ['USD', 'INR', 'EUR', 'JPY'].forEach((code: any) => {
      const shown = adjustSummaryForCurrency(summary, code);
      expect(shown.isOverBudget).toBe(false);
      expect(shown.overBy).toBe(0);
      expect(shown.left).toBe(0);
      expect(shown.spentRatio).toBe(1);
    });
    expect(summary.isOverBudget).toBe(true);
  });

  it('reads exactly 100% when displayed totals are equal though rupees are just under (₹999.60 of ₹1,000)', () => {
    const summary = computeMonthSummary([txn('a', 'expense', 999.6)], LIMITS);
    expect(summary.spentRatio).toBeLessThan(1);
    const inr = adjustSummaryForCurrency(summary, 'INR');
    expect(inr.isOverBudget).toBe(false);
    expect(inr.spentRatio).toBe(1);
    expect(formatMoney(inr.left, 'INR')).toBe('₹0');
    // Totals that display differently keep the rupee ratio.
    const half = adjustSummaryForCurrency(computeMonthSummary([txn('a', 'expense', 500)], LIMITS), 'USD');
    expect(half.spentRatio).toBe(0.5);
  });

  it('is over by the displayed difference when the displayed spending is higher', () => {
    // ₹1,000.25 is ¥1,725 against a ¥1,724 budget.
    const jpy = adjustSummaryForCurrency(computeMonthSummary([txn('a', 'expense', 1000.25)], LIMITS), 'JPY');
    expect(jpy.isOverBudget).toBe(true);
    expect(formatMoney(jpy.overBy, 'JPY')).toBe('¥1');
    // $12.50 spent of $11.36.
    const usd = adjustSummaryForCurrency(computeMonthSummary([txn('a', 'expense', 1100)], LIMITS), 'USD');
    expect(usd.isOverBudget).toBe(true);
    expect(formatMoney(usd.overBy, 'USD')).toBe('$1.14');
  });

  it('gives the left amount as the displayed budget minus the displayed spending', () => {
    // $11.36 budget - $5.69 spent (₹500.40) = $5.67.
    const usd = adjustSummaryForCurrency(computeMonthSummary([txn('a', 'expense', 500.4)], LIMITS), 'USD');
    expect(usd.isOverBudget).toBe(false);
    expect(formatMoney(usd.left, 'USD')).toBe('$5.67');
    const inr = adjustSummaryForCurrency(computeMonthSummary([txn('a', 'expense', 500.4)], LIMITS), 'INR');
    expect(formatMoney(inr.left, 'INR')).toBe('₹500');
  });
});
