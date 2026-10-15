import { Transaction } from '../models/transaction.model';

export type TransactionTypeFilter = 'all' | 'expense' | 'income';
export type TransactionSort = 'newest' | 'oldest' | 'amount';

export interface TransactionFilters {
  /** Case-insensitive substring of the description or category name; trimmed; empty matches all. */
  query: string;
  type: TransactionTypeFilter;
  /** A category name, or null for all categories. */
  category: string | null;
  sort: TransactionSort;
}

export const DEFAULT_TRANSACTION_FILTERS: TransactionFilters = {
  query: '',
  type: 'all',
  category: null,
  sort: 'newest'
};

/** Date desc, then id desc (the app's default "newest first" order). */
function newestFirst(a: Transaction, b: Transaction): number {
  if (a.date !== b.date) {
    return a.date < b.date ? 1 : -1;
  }
  return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
}

const SORTERS: { [sort: string]: (a: Transaction, b: Transaction) => number } = {
  newest: newestFirst,
  oldest: (a, b) => -newestFirst(a, b),
  amount: (a, b) => b.amount !== a.amount ? b.amount - a.amount : newestFirst(a, b)
};

/** Pure: applies the query, type and category filters, then sorts. Returns a new array. */
export function filterTransactions(transactions: Transaction[], filters: TransactionFilters): Transaction[] {
  const query = (filters.query || '').trim().toLowerCase();

  return transactions
    .filter(t => filters.type === 'all' || t.type === filters.type)
    .filter(t => !filters.category || t.category === filters.category)
    .filter(t => !query
      || t.description.toLowerCase().indexOf(query) !== -1
      || t.category.toLowerCase().indexOf(query) !== -1)
    .sort(SORTERS[filters.sort] || newestFirst);
}
