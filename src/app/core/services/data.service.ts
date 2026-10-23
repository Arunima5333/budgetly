import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { generateMockTransactions, INCOME_DISPLAY_COLOR, MOCK_CATEGORIES, MOCK_INCOME_CATEGORIES } from '../mock/mock-data';
import { CategoryBudget } from '../models/category-budget.model';
import { Category, IncomeCategory, NewCategoryInput } from '../models/category.model';
import { MonthSummary } from '../models/month-summary.model';
import { NewTransactionInput, Transaction } from '../models/transaction.model';
import { YearMonth } from '../models/year-month.model';
import { computeCategoryBudgets } from '../utils/category-budgets';
import { MIN_SELECTABLE_MONTH, monthIndex } from '../utils/month-range';
import { computeMonthSummary } from '../utils/month-summary';
import { cleanStoredCategories, cleanStoredTransactions, StoredStatus } from '../utils/stored-data';
import { transactionColor } from '../utils/transaction-color';
import { AlertService } from './alert.service';
import { TodayService } from './today.service';

const STORAGE_KEY = 'budgetly.mockData.v3';
/** Expense categories (defaults + user-added). */
const CATEGORIES_STORAGE_KEY = 'budgetly.categories.v1';
/** Where the original value is copied (once) before broken saved data is cleaned and written back. */
const BACKUP_SUFFIX = '.backup';
const SKIPPED_WARNING = 'Some saved data couldn\'t be read and was skipped.';
const UNREADABLE_WARNING = 'Your saved data couldn\'t be read, so Budgetly started empty. A backup was kept.';
export const CATEGORY_NAME_MAX_LENGTH = 24;
const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
/** Older data formats (v1: pre-rupee amounts, v2: single 'Income' category); removed on load. */
const LEGACY_STORAGE_KEYS = ['budgetly.mockData.v1', 'budgetly.mockData.v2'];

/** One month of getMonthlyExpenseTotals (1-based month). */
export interface MonthlyExpenseTotal {
  year: number;
  month: number;
  /** Expenses in rupees (0 for income-only or empty months). */
  total: number;
  /** True if the month has any transaction, income or expense. */
  hasData: boolean;
}

interface StoredMockData {
  /** 'YYYY-MM' of the month the mock data was first generated in. Information only: nothing acts on it. */
  generatedFor: string;
  transactions: Transaction[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private transactions: Transaction[];

  /** 'YYYY-MM' the mock data was generated in (information only); written back unchanged. */
  private generatedFor: string;

  /** Worst problem found while reading saved data at startup (shown once as a warning alert). */
  private loadProblem: StoredStatus = 'ok';

  /** Expense categories: the defaults plus any the user added (persisted separately). */
  private categories: Category[];

  private dataChangedSubject = new BehaviorSubject<void>(undefined);

  /**
   * Emits once on subscribe and again whenever transactions or categories change
   * (add/update/delete transaction, add/update/delete category). Views recompute from it.
   */
  dataChanged$: Observable<void> = this.dataChangedSubject.asObservable();

  /** Month selected in the UI. Not persisted: starts at the current month on every load. */
  private selectedMonthSubject: BehaviorSubject<YearMonth>;

  /** Emits the selected month (1-based) now and on every change. */
  selectedMonth$: Observable<YearMonth>;

  /** True while the selected month is today's month (new transactions and categories are only added then). */
  isCurrentMonthSelected$: Observable<boolean>;

  /** True while the selected month is the earliest selectable month (see getMinSelectableMonth): ‹ is disabled. */
  isFirstSelectableMonthSelected$: Observable<boolean>;

  constructor(private today: TodayService, private alertService: AlertService) {
    this.categories = this.loadCategories();
    this.transactions = this.loadOrGenerate();
    // Shown once, even though <app-alert> subscribes later (AlertService holds it until then).
    if (this.loadProblem === 'unreadable') {
      this.alertService.show(UNREADABLE_WARNING, 'warning');
    } else if (this.loadProblem === 'partial') {
      this.alertService.show(SKIPPED_WARNING, 'warning');
    }

    // TodayService is injected (so already created): a dev ?today= date applies from the first month shown.
    this.selectedMonthSubject = new BehaviorSubject<YearMonth>(this.today.currentYearMonth());
    this.selectedMonth$ = this.selectedMonthSubject.asObservable();
    this.isCurrentMonthSelected$ = this.selectedMonth$.pipe(map(selected => this.today.isCurrentMonth(selected)));
    this.isFirstSelectableMonthSelected$ = this.selectedMonth$.pipe(
      map(selected => monthIndex(selected) <= monthIndex(this.getMinSelectableMonth())));
  }

  /**
   * Earliest selectable month: January 2020 (MIN_SELECTABLE_MONTH), or the current month if that is earlier
   * (a dev ?today= before 2020), so the current month is always selectable.
   */
  getMinSelectableMonth(): YearMonth {
    const current = this.today.currentYearMonth();
    return monthIndex(current) < monthIndex(MIN_SELECTABLE_MONTH) ? current : { ...MIN_SELECTABLE_MONTH };
  }

  /** The currently selected month (1-based), as a copy. */
  getSelectedMonth(): YearMonth {
    return { ...this.selectedMonthSubject.getValue() };
  }

  /**
   * Selects a month. `month` is 1-based; out-of-range values roll over
   * into the neighbouring year (0 = December of the previous year, 13 = January of the next).
   * Clamped to [getMinSelectableMonth(), current month]: nothing before January 2020 or after the current month.
   */
  setSelectedMonth(year: number, month: number): void {
    if (!isFinite(year) || !isFinite(month)) {
      return;
    }
    // Current month from TodayService, so a dev ?today= date counts.
    const current = this.today.currentYearMonth();
    const min = this.getMinSelectableMonth();
    const requested = new Date(year, month - 1, 1);
    let normalized: YearMonth = { year: requested.getFullYear(), month: requested.getMonth() + 1 };
    if (monthIndex(normalized) > monthIndex(current)) {
      normalized = current;
    } else if (monthIndex(normalized) < monthIndex(min)) {
      normalized = min;
    }
    this.selectedMonthSubject.next({ year: normalized.year, month: normalized.month });
  }

  /** One month later, but never beyond the current month (see setSelectedMonth). */
  nextMonth(): void {
    const current = this.selectedMonthSubject.getValue();
    this.setSelectedMonth(current.year, current.month + 1);
  }

  /** One month earlier, but never before January 2020 (see setSelectedMonth). */
  previousMonth(): void {
    const current = this.selectedMonthSubject.getValue();
    this.setSelectedMonth(current.year, current.month - 1);
  }

  /** Expense categories with their monthly limits (defaults plus user-added), as copies. */
  getCategories(): Category[] {
    return this.categories.map(c => ({ ...c }));
  }

  /**
   * The stored name of the expense or income category matching `name` (trimmed, case-insensitive),
   * or null. Names are keys for filters and colours, so they must be unique across both lists.
   * `ignoreExpenseName` skips that one expense category (the one being edited).
   */
  findCategoryName(name: string, ignoreExpenseName?: string): string | null {
    const key = (name || '').trim().toLowerCase();
    if (!key) {
      return null;
    }
    const ignore = (ignoreExpenseName || '').toLowerCase();
    const names = this.categories.map(c => c.name)
      .filter(n => !ignore || n.toLowerCase() !== ignore)
      .concat(MOCK_INCOME_CATEGORIES.map(c => c.name));
    const match = names.filter(n => n.toLowerCase() === key)[0];
    return match || null;
  }

  /**
   * Adds an expense category: name trimmed, 1-24 chars and unique (see findCategoryName), limit > 0
   * (rounded to 2 decimals), colour a #rrggbb hex. Saves it, notifies `dataChanged$` and returns
   * a copy, or null if the input is invalid.
   */
  addCategory(input: NewCategoryInput): Category | null {
    const category = this.validCategory(input);
    if (!category) {
      return null;
    }
    this.categories = this.categories.concat([category]);
    this.writeCategories();
    this.dataChangedSubject.next(undefined);
    return { ...category };
  }

  /**
   * Updates the expense category called `originalName` in place (order kept), with the same rules
   * as addCategory except that its own current name doesn't count as a duplicate.
   * On a rename, every transaction in that category is re-labelled with the new name (transactions
   * reference categories by name), and those whose description is exactly the old name (saved without a note)
   * get the new name as description too; saved in one write. Notifies `dataChanged$` once and returns a copy,
   * or null for an unknown name or invalid input.
   */
  updateCategory(originalName: string, input: NewCategoryInput): Category | null {
    const index = this.categories.map(c => c.name).indexOf(originalName);
    if (index === -1) {
      return null;
    }
    const category = this.validCategory(input, originalName);
    if (!category) {
      return null;
    }
    this.categories = this.categories.map((c, i) => i === index ? category : c);
    this.writeCategories();

    if (category.name !== originalName) {
      this.transactions = this.transactions.map(t => t.type === 'expense' && t.category === originalName
        ? { ...t, category: category.name, description: t.description === originalName ? category.name : t.description }
        : t);
      this.writeStored({ generatedFor: this.generatedFor, transactions: this.transactions });
    }
    this.dataChangedSubject.next(undefined);
    return { ...category };
  }

  /** True if any stored expense transaction (in any month) uses the expense category `name`. */
  categoryHasTransactions(name: string): boolean {
    return this.transactions.some(t => t.type === 'expense' && t.category === name);
  }

  /**
   * Deletes the expense category `name`. Refuses (returns false, changes nothing) for an unknown
   * name or a category that still has transactions in any month. Otherwise saves the categories,
   * notifies `dataChanged$` once and returns true.
   */
  deleteCategory(name: string): boolean {
    const remaining = this.categories.filter(c => c.name !== name);
    if (remaining.length === this.categories.length || this.categoryHasTransactions(name)) {
      return false;
    }
    this.categories = remaining;
    this.writeCategories();
    this.dataChangedSubject.next(undefined);
    return true;
  }

  /** Income categories (Salary, Freelance, Other) with chart colours; no budgets. */
  getIncomeCategories(): IncomeCategory[] {
    return MOCK_INCOME_CATEGORIES.map(c => ({ ...c }));
  }

  /** All transactions, newest first. */
  getTransactions(): Transaction[] {
    return this.transactions.map(t => ({ ...t }));
  }

  /** A copy of the transaction with this id, or null if there is none. */
  getTransactionById(id: string): Transaction | null {
    const found = this.transactions.filter(t => t.id === id)[0];
    return found ? { ...found } : null;
  }

  /**
   * Transactions in the given month, newest first.
   * @param year Full year, e.g. 2026.
   * @param month 1-based month (1 = January, 12 = December).
   */
  getTransactionsForMonth(year: number, month: number): Transaction[] {
    const prefix = this.monthKey(year, month) + '-';
    return this.transactions
      .filter(t => t.date.indexOf(prefix) === 0)
      .map(t => ({ ...t }));
  }

  /**
   * Expense totals for `count` months ending with the given month, oldest first (crosses years).
   * `hasData` says whether the month has ANY transaction (income or expense); months without data
   * (or outside the generated range) have hasData false and total 0. Income-only months: hasData true, total 0.
   * @param endMonth 1-based month (1 = January, 12 = December).
   */
  getMonthlyExpenseTotals(endYear: number, endMonth: number, count: number): MonthlyExpenseTotal[] {
    const result: MonthlyExpenseTotal[] = [];
    for (let i = Math.max(0, count) - 1; i >= 0; i--) {
      const start = new Date(endYear, endMonth - 1 - i, 1);
      const year = start.getFullYear();
      const month = start.getMonth() + 1;
      const prefix = this.monthKey(year, month) + '-';
      // Sum in paise so float noise can't creep into the totals.
      const inMonth = this.transactions.filter(t => t.date.indexOf(prefix) === 0);
      const paise = inMonth
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Math.round(t.amount * 100), 0);
      result.push({ year, month, total: paise / 100, hasData: inMonth.length > 0 });
    }
    return result;
  }

  /**
   * Income, spending and remaining budget for a month.
   * @param month 1-based month (1 = January, 12 = December).
   */
  getMonthSummary(year: number, month: number): MonthSummary {
    return computeMonthSummary(this.getTransactionsForMonth(year, month), this.categories);
  }

  /**
   * Spending against each expense category's limit, in category order.
   * @param month 1-based month (1 = January, 12 = December).
   */
  getCategoryBudgets(year: number, month: number): CategoryBudget[] {
    return computeCategoryBudgets(this.getTransactionsForMonth(year, month), this.categories);
  }

  /**
   * The newest `limit` transactions of a month, newest first (date desc, id for ties).
   * @param month 1-based month (1 = January, 12 = December).
   */
  getRecentTransactions(year: number, month: number, limit = 5): Transaction[] {
    return this.getTransactionsForMonth(year, month).slice(0, Math.max(0, limit));
  }

  /**
   * Display colour for a transaction: the category colour for expenses, one shared
   * colour for all income, or null for an unknown category (use a neutral fallback).
   */
  getTransactionColor(transaction: Transaction): string | null {
    return transactionColor(transaction, this.categories, INCOME_DISPLAY_COLOR);
  }

  /**
   * Adds a user-entered transaction, saves it to localStorage and notifies `dataChanged$`.
   * The amount is rounded to 2 decimals; the description is the trimmed note, or the category name.
   * Returns a copy of the saved transaction.
   */
  addTransaction(input: NewTransactionInput): Transaction {
    // 'u-' prefix can't collide with generated 't-YYYYMM-NN' ids.
    const id = 'u-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
    const transaction = this.buildTransaction(id, input);
    this.saveTransactions(this.transactions.concat([transaction]));
    return { ...transaction };
  }

  /**
   * Replaces the transaction with this id (the id is kept), with the same rules as addTransaction:
   * amount rounded to 2 decimals and > 0, description = trimmed note or the category name.
   * Saves, notifies `dataChanged$` and returns a copy, or null if the id doesn't exist.
   */
  updateTransaction(id: string, input: NewTransactionInput): Transaction | null {
    const index = this.transactions.map(t => t.id).indexOf(id);
    if (index === -1) {
      return null;
    }
    const transaction = this.buildTransaction(id, input);
    const next = this.transactions.slice();
    next[index] = transaction;
    this.saveTransactions(next);
    return { ...transaction };
  }

  /**
   * Removes the transaction with this id, saves and notifies `dataChanged$`.
   * Returns false (and changes nothing) if the id doesn't exist.
   */
  deleteTransaction(id: string): boolean {
    const remaining = this.transactions.filter(t => t.id !== id);
    if (remaining.length === this.transactions.length) {
      return false;
    }
    this.saveTransactions(remaining);
    return true;
  }

  private buildTransaction(id: string, input: NewTransactionInput): Transaction {
    const amount = Math.round(input.amount * 100) / 100;
    if (!isFinite(amount) || amount <= 0) {
      throw new Error('Transaction amount must be greater than 0');
    }
    const note = (input.note || '').trim();
    return {
      id,
      date: input.date,
      description: note || input.category,
      category: input.category,
      amount,
      type: input.type
    };
  }

  /** Re-sorts, persists and notifies listeners. */
  private saveTransactions(transactions: Transaction[]) {
    this.transactions = this.sortNewestFirst(transactions);
    this.writeStored({ generatedFor: this.generatedFor, transactions: this.transactions });
    this.dataChangedSubject.next(undefined);
  }

  /** Development helper: discards the stored data and generates a fresh set. */
  resetMockData(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Storage unavailable; the new data will only live in memory.
    }
    this.transactions = this.loadOrGenerate();
    this.dataChangedSubject.next(undefined);
  }

  /**
   * Saved transactions, cleaned (see cleanStoredTransactions). Mock data is generated ONLY when nothing is
   * saved (or storage is unavailable): a month change never regenerates or replaces saved data, so a new
   * month simply starts empty. Broken entries are skipped, unreadable data starts empty; in both cases the
   * original value is backed up and the cleaned data written back, so the warning shows once.
   */
  private loadOrGenerate(): Transaction[] {
    this.removeLegacyData();
    let raw: string | null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // Storage blocked: not corruption. Mock data in memory only, no warning.
      return this.generateMock(false);
    }
    const cleaned = cleanStoredTransactions(raw);
    if (cleaned.status === 'missing') {
      return this.generateMock(true);
    }
    this.generatedFor = cleaned.generatedFor || this.realMonthKey();
    if (cleaned.status !== 'ok') {
      this.backupOnce(STORAGE_KEY, raw);
      this.writeStored({ generatedFor: this.generatedFor, transactions: cleaned.transactions });
      this.noteProblem(cleaned.status);
    }
    return this.sortNewestFirst(cleaned.transactions);
  }

  /**
   * Fresh mock transactions. Deliberately the REAL date, not TodayService, so a dev ?today= date never
   * reshapes them. Saved when `persist` is true.
   */
  private generateMock(persist: boolean): Transaction[] {
    const today = new Date();
    this.generatedFor = this.realMonthKey();
    const transactions = this.sortNewestFirst(generateMockTransactions(today));
    if (persist) {
      this.writeStored({ generatedFor: this.generatedFor, transactions });
    }
    return transactions;
  }

  /** 'YYYY-MM' of the real current month. */
  private realMonthKey(): string {
    const today = new Date();
    return this.monthKey(today.getFullYear(), today.getMonth() + 1);
  }

  /** Copies the original saved value to `<key>.backup` unless a backup already exists. */
  private backupOnce(key: string, raw: string | null) {
    if (raw === null) {
      return;
    }
    try {
      if (localStorage.getItem(key + BACKUP_SUFFIX) === null) {
        localStorage.setItem(key + BACKUP_SUFFIX, raw);
      }
    } catch (e) {
      // Storage unavailable or full; the cleaned data still loads.
    }
  }

  /** Keeps the worst load problem ('unreadable' beats 'partial'). */
  private noteProblem(status: StoredStatus) {
    if (status === 'unreadable' || (status === 'partial' && this.loadProblem !== 'unreadable')) {
      this.loadProblem = status;
    }
  }

  /** Normalised category from user input, or null if invalid (see addCategory for the rules). */
  private validCategory(input: NewCategoryInput, ignoreExpenseName?: string): Category | null {
    const name = (input.name || '').trim();
    const monthlyLimit = Math.round(Number(input.monthlyLimit) * 100) / 100;
    const valid = name.length > 0
      && name.length <= CATEGORY_NAME_MAX_LENGTH
      && this.findCategoryName(name, ignoreExpenseName) === null
      && isFinite(monthlyLimit) && monthlyLimit > 0
      && HEX_COLOR.test(input.color || '');
    return valid ? { name, monthlyLimit, color: input.color.toLowerCase() } : null;
  }

  /**
   * Saved categories, cleaned (see cleanStoredCategories): the defaults when nothing is saved (or storage is
   * unavailable), an empty list when the saved value is unreadable; [] stays []. Broken entries are skipped;
   * when anything was wrong the original is backed up and the cleaned list written back.
   */
  private loadCategories(): Category[] {
    let raw: string | null;
    try {
      raw = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    } catch (e) {
      return MOCK_CATEGORIES.map(c => ({ ...c }));
    }
    const cleaned = cleanStoredCategories(raw);
    if (cleaned.status === 'missing') {
      return MOCK_CATEGORIES.map(c => ({ ...c }));
    }
    if (cleaned.status !== 'ok') {
      this.backupOnce(CATEGORIES_STORAGE_KEY, raw);
      this.categories = cleaned.categories;
      this.writeCategories();
      this.noteProblem(cleaned.status);
    }
    return cleaned.categories;
  }

  private writeCategories(): void {
    try {
      localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(this.categories));
    } catch (e) {
      // Storage unavailable or full; keep the categories in memory only.
    }
  }

  private removeLegacyData(): void {
    LEGACY_STORAGE_KEYS.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        // Storage unavailable; nothing to clean up.
      }
    });
  }

  private writeStored(data: StoredMockData): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Storage unavailable or full; keep the data in memory only.
    }
  }

  private sortNewestFirst(transactions: Transaction[]): Transaction[] {
    // ISO dates sort correctly as strings; the id breaks ties for a stable order.
    return transactions.slice().sort((a, b) => {
      if (a.date !== b.date) {
        return a.date < b.date ? 1 : -1;
      }
      return a.id < b.id ? 1 : -1;
    });
  }

  /** 'YYYY-MM' for a 1-based month. */
  private monthKey(year: number, month: number): string {
    return year + '-' + (month < 10 ? '0' + month : month);
  }
}
