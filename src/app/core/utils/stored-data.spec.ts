import { cleanStoredCategories, cleanStoredTransactions, isValidTransaction } from './stored-data';

const GOOD = { id: 't1', date: '2026-10-02', description: 'Groceries', category: 'Food', amount: 500, type: 'expense' };

describe('cleanStoredTransactions', () => {
  it('reports a missing key', () => {
    expect(cleanStoredTransactions(null).status).toBe('missing');
  });

  it('keeps fully valid data (including categories that no longer exist)', () => {
    const gone = { ...GOOD, id: 't2', category: 'Deleted category' };
    const result = cleanStoredTransactions(JSON.stringify({ generatedFor: '2026-10', transactions: [GOOD, gone] }));
    expect(result.status).toBe('ok');
    expect(result.skipped).toBe(0);
    expect(result.generatedFor).toBe('2026-10');
    expect(result.transactions.map(t => t.id)).toEqual(['t1', 't2']);
  });

  it('skips broken entries and repeated ids (first wins)', () => {
    const broken = [
      { ...GOOD, id: 't2', amount: -5 },
      { ...GOOD, id: 't3', date: '2026-10-2' },
      { ...GOOD, id: 't4', type: 'transfer' },
      { ...GOOD, id: 't5', amount: '10' },
      { ...GOOD, id: 't6', description: 7 },
      null,
      'text',
      { ...GOOD, description: 'Duplicate of t1' }
    ];
    const result = cleanStoredTransactions(JSON.stringify({ generatedFor: '2026-10', transactions: [GOOD].concat(broken as any[]) }));
    expect(result.status).toBe('partial');
    expect(result.skipped).toBe(8);
    expect(result.transactions.length).toBe(1);
    expect(result.transactions[0].description).toBe('Groceries');
  });

  it('is unreadable for bad JSON or the wrong shape', () => {
    expect(cleanStoredTransactions('{not json').status).toBe('unreadable');
    expect(cleanStoredTransactions('[]').status).toBe('unreadable');
    expect(cleanStoredTransactions('{"transactions":"nope"}').status).toBe('unreadable');
    expect(cleanStoredTransactions('null').status).toBe('unreadable');
  });

  it('accepts an empty list and a missing generatedFor', () => {
    const result = cleanStoredTransactions('{"transactions":[]}');
    expect(result.status).toBe('ok');
    expect(result.generatedFor).toBeNull();
  });

  it('validates single transactions', () => {
    expect(isValidTransaction(GOOD)).toBe(true);
    expect(isValidTransaction({ ...GOOD, id: '' })).toBe(false);
    expect(isValidTransaction({ ...GOOD, amount: Infinity })).toBe(false);
  });
});

describe('cleanStoredCategories', () => {
  const FOOD = { name: 'Food', color: '#e0812f', monthlyLimit: 10000 };

  it('reports a missing key and keeps an empty list', () => {
    expect(cleanStoredCategories(null).status).toBe('missing');
    const empty = cleanStoredCategories('[]');
    expect(empty.status).toBe('ok');
    expect(empty.categories).toEqual([]);
  });

  it('skips broken entries and repeated names (case-insensitive)', () => {
    const raw = JSON.stringify([FOOD, { name: '', color: '#000000', monthlyLimit: 5 }, { name: 'Gym', color: 'red', monthlyLimit: 5 },
      { name: 'Gym', color: '#2a9d8f', monthlyLimit: 0 }, { name: 'food', color: '#2a9d8f', monthlyLimit: 5 },
      { name: 'Kid\'s "fun"', color: '#2a9d8f', monthlyLimit: 500 }]);
    const result = cleanStoredCategories(raw);
    expect(result.status).toBe('partial');
    expect(result.skipped).toBe(4);
    expect(result.categories.map(c => c.name)).toEqual(['Food', 'Kid\'s "fun"']);
  });

  it('is unreadable for bad JSON or a non-array', () => {
    expect(cleanStoredCategories('{').status).toBe('unreadable');
    expect(cleanStoredCategories('{"name":"Food"}').status).toBe('unreadable');
  });
});
