import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { YearMonth } from '../models/year-month.model';
import { firstOfMonthIsoLocal, isCurrentMonth, parseIsoLocalDate, todayIsoLocal } from '../utils/date-format';

/**
 * Reads a fake "today" from a page address like `?today=2026-11-01`. Development builds only:
 * production always returns null, so the parameter can never take effect there.
 * Invalid values are ignored with one console warning.
 */
export function readFakeToday(search: string, production: boolean): Date | null {
  if (production) {
    return null;
  }
  const match = /[?&]today=([^&]*)/.exec(search || '');
  if (!match) {
    return null;
  }
  const value = decodeURIComponent(match[1]);
  const date = parseIsoLocalDate(value);
  if (!date) {
    console.warn('Budgetly: ignoring ?today="' + value + '" (expected a real date as YYYY-MM-DD). Using the real date.');
  }
  return date;
}

/**
 * The single source of "today" for the UI: the current month, past months, the month selector's limits,
 * and the Add transaction date range. Uses the real date, or in development a fake one from `?today=`.
 * The fake date is read once when the app starts (this service is created before DataService picks
 * its initial month) and lives in memory only: it survives in-app navigation and redirects, and a load
 * without the parameter uses the real date again. Not for the mock data generator (that stays on the
 * real date).
 */
@Injectable({
  providedIn: 'root'
})
export class TodayService {
  /** True while a development `?today=` date is in use. */
  readonly isFake: boolean;

  private readonly fakeToday: Date | null;

  constructor() {
    this.fakeToday = readFakeToday(window.location.search, environment.production);
    this.isFake = this.fakeToday !== null;
    if (this.fakeToday) {
      // tslint:disable-next-line:no-console
      console.info('Budgetly: using a fake today of ' + todayIsoLocal(this.fakeToday) + ' (from ?today=, development only).');
    }
  }

  /** Today at local midnight (the fake date when one is set). A new Date each call. */
  now(): Date {
    const source = this.fakeToday || new Date();
    return new Date(source.getFullYear(), source.getMonth(), source.getDate());
  }

  /** Today as 'YYYY-MM-DD'. */
  todayIso(): string {
    return todayIsoLocal(this.now());
  }

  /** The 1st of the current month as 'YYYY-MM-DD'. */
  firstOfMonthIso(): string {
    return firstOfMonthIsoLocal(this.now());
  }

  /** The current month (1-based). */
  currentYearMonth(): YearMonth {
    const today = this.now();
    return { year: today.getFullYear(), month: today.getMonth() + 1 };
  }

  /** True when the 1-based year/month is the current month. */
  isCurrentMonth(ym: YearMonth): boolean {
    return isCurrentMonth(ym, this.now());
  }
}
