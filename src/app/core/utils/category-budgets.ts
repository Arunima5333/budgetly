import { BudgetStatus, CategoryBudget } from '../models/category-budget.model';
import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import { CurrencyCode, displaysAsZero } from './money';

/** Ratio from which a category counts as "Close to limit". */
export const CLOSE_TO_LIMIT_RATIO = 0.85;

function toPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

/**
 * Pure: status for a spent amount against a limit. Compares in whole paise,
 * so float noise (e.g. 0.1 + 0.2 style sums) can't break "exactly at the limit".
 */
export function budgetStatus(spentPaise: number, limitPaise: number): BudgetStatus {
  if (spentPaise > limitPaise) {
    return 'over';
  }
  if (spentPaise === limitPaise && limitPaise > 0) {
    return 'at-limit';
  }
  if (limitPaise > 0 && spentPaise / limitPaise >= CLOSE_TO_LIMIT_RATIO) {
    return 'close';
  }
  return 'on-track';
}

const ATTENTION_RANK: { [status: string]: number } = { over: 0, 'at-limit': 1, close: 2 };

/**
 * Pure: the categories that need attention (close, at limit or over, as decided by budgetStatus),
 * ordered over first, then at limit, then close; within each group the highest ratio first.
 */
export function needsAttention(budgets: CategoryBudget[]): CategoryBudget[] {
  return budgets
    .filter(b => b.status !== 'on-track')
    .sort((a, b) => ATTENTION_RANK[a.status] - ATTENTION_RANK[b.status] || b.ratio - a.ratio);
}

/** Pure: spending per expense category (in category order) for one month's transactions. */
export function computeCategoryBudgets(transactions: Transaction[], categories: Category[]): CategoryBudget[] {
  const spentPaise: { [name: string]: number } = {};
  transactions.forEach(t => {
    if (t.type === 'expense') {
      spentPaise[t.category] = (spentPaise[t.category] || 0) + toPaise(t.amount);
    }
  });

  return categories.map(category => toCategoryBudget(category, spentPaise[category.name] || 0));
}

/**
 * Pure: one category's budget row from its spending in paise (status via budgetStatus).
 * Also used for the live preview in the Add/Edit category modal.
 */
export function toCategoryBudget(category: Category, spentPaise: number): CategoryBudget {
  const spent = spentPaise;
  const limit = toPaise(category.monthlyLimit);
  const status = budgetStatus(spent, limit);
  const ratio = limit > 0 ? spent / limit : 0;
  // Floor within the limit (99.99% reads 99%, not 100%); ceil when over (100.01% reads 101%).
  const percentUsed = status === 'over' && limit > 0 ? Math.ceil(ratio * 100) : Math.floor(ratio * 100);

  return {
    name: category.name,
    color: category.color,
    limit: category.monthlyLimit,
    spent: spent / 100,
    ratio,
    percentUsed,
    barPercent: Math.min(100, Math.max(0, percentUsed)),
    status,
    overBy: status === 'over' ? (spent - limit) / 100 : 0
  };
}

/**
 * Display-level adjustment for the selected currency: an overspend that shows as zero there (e.g. ₹0.40 is
 * '$0.00' / '¥0' / '₹0') reads "At limit" instead of "Over by $0.00", with a full bar, 100% used and nothing over
 * (so the bottom line is "… left", and Needs attention groups it with at-limit). Stored data and the rupee
 * status used elsewhere are untouched; anything else is returned as is.
 */
export function adjustStatusForCurrency(budget: CategoryBudget, code: CurrencyCode): CategoryBudget {
  if (budget.status !== 'over' || !displaysAsZero(budget.overBy, code)) {
    return budget;
  }
  return { ...budget, status: 'at-limit', overBy: 0, percentUsed: 100, barPercent: 100 };
}
