import { Category } from '../models/category.model';
import { MonthSummary } from '../models/month-summary.model';
import { Transaction } from '../models/transaction.model';
import { CurrencyCode, displaysAsZero } from './money';

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

/** Pure: summarises one month's transactions against the total of all category limits. */
export function computeMonthSummary(transactions: Transaction[], categories: Category[]): MonthSummary {
  let income = 0;
  let incomeCount = 0;
  let spent = 0;

  transactions.forEach(t => {
    if (t.type === 'income') {
      income += t.amount;
      incomeCount++;
    } else {
      spent += t.amount;
    }
  });

  income = round2(income);
  spent = round2(spent);
  const totalBudget = round2(categories.reduce((sum, c) => sum + c.monthlyLimit, 0));
  const isOverBudget = spent > totalBudget;

  return {
    income,
    incomeCount,
    spent,
    totalBudget,
    left: round2(totalBudget - spent),
    spentRatio: totalBudget > 0 ? spent / totalBudget : 0,
    isOverBudget,
    overBy: isOverBudget ? round2(spent - totalBudget) : 0
  };
}

/**
 * Display-level adjustment for the selected currency: an overall overspend that shows as zero there reads as
 * exactly on budget ("$0.00" left, not "Over by $0.00"). Stored data and the rupee summary are untouched.
 */
export function adjustSummaryForCurrency<T extends MonthSummary>(summary: T, code: CurrencyCode): T {
  if (!summary.isOverBudget || !displaysAsZero(summary.overBy, code)) {
    return summary;
  }
  return Object.assign({}, summary, { isOverBudget: false, overBy: 0, left: 0 });
}
