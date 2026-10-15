import { IncomeCategoryName } from './transaction.model';

/** An expense category with a monthly budget. */
export interface Category {
  name: string;
  /** Hex colour used for charts and badges, e.g. '#0ea5e9'. */
  color: string;
  monthlyLimit: number;
}

/** What the user enters when adding an expense category. */
export interface NewCategoryInput {
  /** Trimmed when saved; 1-24 characters, unique across expense and income categories. */
  name: string;
  /** Rupees; rounded to 2 decimals when saved. Must be > 0. */
  monthlyLimit: number;
  /** '#rrggbb'. */
  color: string;
}

/** An income category (no budget). */
export interface IncomeCategory {
  name: IncomeCategoryName;
  /** Hex colour used for charts and badges. */
  color: string;
}
