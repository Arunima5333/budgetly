import { YearMonth } from '../models/year-month.model';

/** Earliest month the app lets you select (arrows, picker, setSelectedMonth). */
export const MIN_SELECTABLE_MONTH: YearMonth = { year: 2020, month: 1 };

/** Comparable month index (year * 12 + month) for 1-based year/months. */
export function monthIndex(ym: YearMonth): number {
  return ym.year * 12 + ym.month;
}
