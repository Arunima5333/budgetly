import { CategoryBudget } from '../models/category-budget.model';
import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import { budgetStatus, computeCategoryBudgets, needsAttention, toCategoryBudget } from './category-budgets';

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
