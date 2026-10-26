import { CategoryBudget } from '../models/category-budget.model';
import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import { adjustStatusForCurrency, budgetStatus, computeCategoryBudgets, needsAttention, toCategoryBudget } from './category-budgets';
import { CurrencyCode } from './money';

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

describe('adjustStatusForCurrency', () => {
  const RENT: Category = { name: 'Rent', color: '#5b6cf0', monthlyLimit: 10000 };
  const overBy = (paise: number) => toCategoryBudget(RENT, 1000000 + paise);

  it('shows an overspend that displays as zero as At limit (₹0.01 everywhere, ₹0.40 in USD/INR, ₹0.25 in JPY)', () => {
    const cases: [number, CurrencyCode][] = [
      [1, 'USD'], [1, 'JPY'], [1, 'INR'], [1, 'EUR'], [1, 'GBP'], [40, 'USD'], [40, 'INR'], [25, 'JPY']
    ];
    cases.forEach(([paise, code]) => {
      const shown = adjustStatusForCurrency(overBy(paise), code);
      expect(shown.status).toBe('at-limit');
      expect(shown.overBy).toBe(0);
      expect(shown.percentUsed).toBe(100);
      expect(shown.barPercent).toBe(100);
    });
  });

  it('keeps Over when the overspend displays as non-zero', () => {
    // ₹0.40 is ¥0.69, which shows as '¥1'.
    expect(adjustStatusForCurrency(overBy(40), 'JPY').status).toBe('over');
    // ₹0.50 is '₹1' in INR (whole rupees) and '$0.01' in USD, but '¥1' too (0.5 / 0.58 = 0.86 -> ¥1).
    expect(adjustStatusForCurrency(overBy(50), 'INR').status).toBe('over');
    expect(adjustStatusForCurrency(overBy(50), 'USD').status).toBe('over');
    expect(adjustStatusForCurrency(overBy(50), 'JPY').status).toBe('over');
    const big = adjustStatusForCurrency(overBy(150000), 'USD');
    expect(big.status).toBe('over');
    expect(big.overBy).toBe(1500);
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
