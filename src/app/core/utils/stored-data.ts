import { Category } from '../models/category.model';
import { Transaction } from '../models/transaction.model';

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Result of reading one saved value:
 * - 'missing': nothing saved under the key
 * - 'ok': everything readable
 * - 'partial': readable, but some entries were broken and skipped
 * - 'unreadable': bad JSON or the wrong shape; nothing can be used
 */
export type StoredStatus = 'missing' | 'ok' | 'partial' | 'unreadable';

export interface CleanedTransactions {
  status: StoredStatus;
  /** 'YYYY-MM' the data was first generated in (information only), or null. */
  generatedFor: string | null;
  transactions: Transaction[];
  /** Broken entries plus duplicate ids. */
  skipped: number;
}

export interface CleanedCategories {
  status: StoredStatus;
  categories: Category[];
  /** Broken entries plus duplicate names (case-insensitive). */
  skipped: number;
}

/** A saved transaction: string id, 'YYYY-MM-DD' date, income/expense, positive amount, string category/description. */
export function isValidTransaction(t: any): boolean {
  return !!t && typeof t === 'object'
    && typeof t.id === 'string' && t.id.length > 0
    && typeof t.date === 'string' && ISO_DATE.test(t.date)
    && typeof t.description === 'string'
    && typeof t.category === 'string'
    && typeof t.amount === 'number' && isFinite(t.amount) && t.amount > 0
    && (t.type === 'income' || t.type === 'expense');
}

/** A saved expense category: non-empty name, #rrggbb colour, finite limit > 0. */
export function isValidCategory(c: any): boolean {
  return !!c && typeof c === 'object'
    && typeof c.name === 'string' && c.name.trim().length > 0
    && typeof c.color === 'string' && HEX_COLOR.test(c.color)
    && typeof c.monthlyLimit === 'number' && isFinite(c.monthlyLimit) && c.monthlyLimit > 0;
}

function parse(raw: string): { ok: boolean; value: any } {
  try {
    return { ok: true, value: JSON.parse(raw) };
  } catch (e) {
    return { ok: false, value: null };
  }
}

/**
 * Cleans the saved transactions value (`{ generatedFor, transactions: [...] }`): keeps every valid transaction
 * (a category that no longer exists is fine), skips broken ones and repeated ids (the first wins).
 */
export function cleanStoredTransactions(raw: string | null): CleanedTransactions {
  if (raw === null) {
    return { status: 'missing', generatedFor: null, transactions: [], skipped: 0 };
  }
  const parsed = parse(raw);
  const data = parsed.value;
  if (!parsed.ok || !data || typeof data !== 'object' || !Array.isArray(data.transactions)) {
    return { status: 'unreadable', generatedFor: null, transactions: [], skipped: 0 };
  }
  const seen: { [id: string]: boolean } = {};
  const transactions: Transaction[] = [];
  let skipped = 0;
  data.transactions.forEach((t: any) => {
    if (!isValidTransaction(t) || seen[t.id]) {
      skipped++;
      return;
    }
    seen[t.id] = true;
    transactions.push({ id: t.id, date: t.date, description: t.description, category: t.category, amount: t.amount, type: t.type });
  });
  return {
    status: skipped ? 'partial' : 'ok',
    generatedFor: typeof data.generatedFor === 'string' ? data.generatedFor : null,
    transactions,
    skipped
  };
}

/** Cleans the saved categories value (an array): keeps valid entries, skips broken ones and repeated names. */
export function cleanStoredCategories(raw: string | null): CleanedCategories {
  if (raw === null) {
    return { status: 'missing', categories: [], skipped: 0 };
  }
  const parsed = parse(raw);
  if (!parsed.ok || !Array.isArray(parsed.value)) {
    return { status: 'unreadable', categories: [], skipped: 0 };
  }
  const seen: { [name: string]: boolean } = {};
  const categories: Category[] = [];
  let skipped = 0;
  parsed.value.forEach((c: any) => {
    const key = isValidCategory(c) ? c.name.trim().toLowerCase() : '';
    if (!key || seen[key]) {
      skipped++;
      return;
    }
    seen[key] = true;
    categories.push({ name: c.name, color: c.color, monthlyLimit: c.monthlyLimit });
  });
  return { status: skipped ? 'partial' : 'ok', categories, skipped };
}
