import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
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

describe('adjustSummaryForCurrency', () => {
  const LIMITS: Category[] = [{ name: 'Food', color: '#e0812f', monthlyLimit: 1000 }];

  it('shows an overall overspend that displays as zero as exactly on budget', () => {
    const summary = computeMonthSummary([txn('a', 'expense', 1000.25)], LIMITS);
    expect(summary.isOverBudget).toBe(true);
    ['USD', 'JPY', 'INR'].forEach((code: any) => {
      const shown = adjustSummaryForCurrency(summary, code);
      expect(shown.isOverBudget).toBe(false);
      expect(shown.overBy).toBe(0);
      expect(shown.left).toBe(0);
    });
    expect(summary.isOverBudget).toBe(true);
  });

  it('keeps a visible overspend', () => {
    const summary = computeMonthSummary([txn('a', 'expense', 1100)], LIMITS);
    expect(adjustSummaryForCurrency(summary, 'USD').isOverBudget).toBe(true);
    expect(adjustSummaryForCurrency(summary, 'USD').overBy).toBe(100);
  });
});
