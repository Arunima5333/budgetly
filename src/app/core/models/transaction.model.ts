export type TransactionType = 'income' | 'expense';

/** Category names used by income transactions. Kept separate from the expense categories. */
export type IncomeCategoryName = 'Salary' | 'Freelance' | 'Other';

export const INCOME_CATEGORIES: IncomeCategoryName[] = ['Salary', 'Freelance', 'Other'];

export interface Transaction {
  id: string;
  /** ISO date, 'YYYY-MM-DD'. */
  date: string;
  description: string;
  /**
   * For expenses, an expense Category name (e.g. 'Food').
   * For income, one of INCOME_CATEGORIES: 'Salary', 'Freelance' or 'Other'.
   */
  category: string;
  /** Always positive, rounded to 2 decimals. Use `type` for the direction. */
  amount: number;
  type: TransactionType;
}

/** What the user enters when adding a transaction. */
export interface NewTransactionInput {
  type: TransactionType;
  /** Rupees; rounded to 2 decimals when saved. Must be > 0. */
  amount: number;
  category: string;
  /** ISO date, 'YYYY-MM-DD'. */
  date: string;
  /** Optional; becomes the description (falls back to the category name). */
  note?: string;
}
