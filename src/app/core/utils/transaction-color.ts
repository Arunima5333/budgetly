import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';

/**
 * Pure: display colour for a transaction. All income uses `incomeColor`;
 * expenses use their category's colour. Returns null when the category is unknown,
 * so the caller can fall back to a neutral theme colour.
 */
export function transactionColor(transaction: Transaction, categories: Category[], incomeColor: string): string | null {
  if (transaction.type === 'income') {
    return incomeColor;
  }
  const category = categories.filter(c => c.name === transaction.category)[0];
  return category ? category.color : null;
}
