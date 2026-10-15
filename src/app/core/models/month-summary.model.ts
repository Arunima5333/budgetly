/** Totals for one month, used by the Overview summary cards. */
export interface MonthSummary {
  income: number;
  /** Number of income transactions. */
  incomeCount: number;
  spent: number;
  /** Sum of all category monthly limits. */
  totalBudget: number;
  /** totalBudget - spent; negative when over budget. */
  left: number;
  /** spent / totalBudget, unclamped (0 when there is no budget). */
  spentRatio: number;
  isOverBudget: boolean;
  /** spent - totalBudget when over budget, otherwise 0. */
  overBy: number;
}
