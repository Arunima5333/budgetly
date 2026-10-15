import { Category } from '../models/category.model';
import { MonthSummary } from '../models/month-summary.model';
import { Transaction } from '../models/transaction.model';

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
