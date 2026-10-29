import { Category } from '../models/category.model';
import { MonthSummary } from '../models/month-summary.model';
import { Transaction } from '../models/transaction.model';
import { CurrencyCode, displayedUnits, inrFromDisplayedUnits } from './money';

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
 * Display-level month summary for the selected currency, from the totals AS DISPLAYED: over budget only when the
 * displayed spending exceeds the displayed total budget, "Over by" / "left" being the displayed difference
 * (in rupees that format as exactly that). Equal displayed totals read as on budget with nothing left and a
 * ratio of exactly 1 (100%, full bar); other ratios stay as they are. Stored data and the rupee summary are untouched.
 */
export function adjustSummaryForCurrency<T extends MonthSummary>(summary: T, code: CurrencyCode): T {
  const spent = displayedUnits(summary.spent, code);
  const budget = displayedUnits(summary.totalBudget, code);
  const isOverBudget = spent > budget;
  const atBudget = spent === budget && budget > 0;
  return Object.assign({}, summary, {
    isOverBudget,
    spentRatio: atBudget ? 1 : summary.spentRatio,
    overBy: isOverBudget ? inrFromDisplayedUnits(spent - budget, code) : 0,
    left: isOverBudget ? 0 : inrFromDisplayedUnits(budget - spent, code)
  });
}
