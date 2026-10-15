import { TransactionType } from '../models/transaction.model';

/** U+2212 MINUS SIGN (not a hyphen), used in front of expense amounts. */
export const MINUS_SIGN = '−';

/** '+' for income, '−' (U+2212) for expenses. */
export function amountSign(type: TransactionType): string {
  return type === 'income' ? '+' : MINUS_SIGN;
}
