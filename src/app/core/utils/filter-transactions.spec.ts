import { Transaction } from '../models/transaction.model';
import { DEFAULT_TRANSACTION_FILTERS, filterTransactions, TransactionFilters } from './filter-transactions';

const DATA: Transaction[] = [
  { id: 't1', date: '2026-10-02', description: 'Groceries', category: 'Food', amount: 500, type: 'expense' },
  { id: 't2', date: '2026-10-05', description: 'Monthly salary', category: 'Salary', amount: 75000, type: 'income' },
  { id: 't3', date: '2026-10-05', description: 'Metro card', category: 'Transport', amount: 500, type: 'expense' },
  { id: 't4', date: '2026-10-01', description: 'Rent', category: 'Rent', amount: 20000, type: 'expense' }
];

function ids(filters: Partial<TransactionFilters>): string[] {
  return filterTransactions(DATA, { ...DEFAULT_TRANSACTION_FILTERS, ...filters }).map(t => t.id);
}

describe('filterTransactions', () => {
  it('defaults to everything, newest first (date desc, then id desc)', () => {
    expect(ids({})).toEqual(['t3', 't2', 't1', 't4']);
  });

  it('searches description and category, case-insensitive and trimmed', () => {
    expect(ids({ query: '  GROC ' })).toEqual(['t1']);
    expect(ids({ query: 'transport' })).toEqual(['t3']);
    expect(ids({ query: 'zzz' })).toEqual([]);
  });

  it('filters by type', () => {
    expect(ids({ type: 'income' })).toEqual(['t2']);
    expect(ids({ type: 'expense' })).toEqual(['t3', 't1', 't4']);
  });

  it('filters by exact category name', () => {
    expect(ids({ category: 'Food' })).toEqual(['t1']);
    expect(ids({ category: 'food' })).toEqual([]);
  });

  it('sorts oldest first', () => {
    expect(ids({ sort: 'oldest' })).toEqual(['t4', 't1', 't2', 't3']);
  });

  it('sorts by amount (highest first), ties newest first', () => {
    expect(ids({ sort: 'amount' })).toEqual(['t2', 't4', 't3', 't1']);
  });

  it('combines filters and does not mutate the input', () => {
    const before = DATA.map(t => t.id);
    expect(ids({ type: 'expense', query: 'r', sort: 'amount' })).toEqual(['t4', 't3', 't1']);
    expect(DATA.map(t => t.id)).toEqual(before);
  });
});
