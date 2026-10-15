export type BudgetStatus = 'on-track' | 'close' | 'at-limit' | 'over';

/** One expense category's spending against its monthly limit. */
export interface CategoryBudget {
  name: string;
  color: string;
  limit: number;
  /** Total spent this month, 2 decimals. */
  spent: number;
  /** spent / limit, unclamped (0 when the limit is 0). */
  ratio: number;
  /** Whole percentage used, for labels: floored while within the limit, rounded up when over. */
  percentUsed: number;
  /** Progress bar width, percentUsed clamped to 0-100. */
  barPercent: number;
  status: BudgetStatus;
  /** spent - limit when over, otherwise 0. */
  overBy: number;
}
