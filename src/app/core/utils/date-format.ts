function pad2(value: number): string {
  return value < 10 ? '0' + value : String(value);
}

/**
 * `today`'s LOCAL date as 'YYYY-MM-DD' (toISOString would use UTC and can shift the day).
 * Pass TodayService.now() so a faked dev date is respected.
 */
export function todayIsoLocal(today: Date): string {
  return today.getFullYear() + '-' + pad2(today.getMonth() + 1) + '-' + pad2(today.getDate());
}

/** 1-based month -> 'October 2026' (en-US), the same format as the Overview month selector. */
export function formatMonthYear(year: number, month: number): string {
  return new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/** 'YYYY-MM-DD' -> '8 Oct' (en-IN). Parsed as a local date to avoid timezone shifts. */
export function formatDayMonth(isoDate: string): string {
  const parts = isoDate.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2])
    .toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

/** The 1st of `today`'s LOCAL month as 'YYYY-MM-DD' (pass TodayService.now()). */
export function firstOfMonthIsoLocal(today: Date): string {
  return today.getFullYear() + '-' + pad2(today.getMonth() + 1) + '-01';
}

/** True when the 1-based year/month is `today`'s LOCAL month (pass TodayService.now()). */
export function isCurrentMonth(ym: { year: number; month: number }, today: Date): boolean {
  return ym.year === today.getFullYear() && ym.month === today.getMonth() + 1;
}

/**
 * Strict 'YYYY-MM-DD' -> LOCAL midnight Date, or null if the format is wrong or the date doesn't exist
 * (e.g. 2026-02-30). Never uses new Date('YYYY-MM-DD'), which parses as UTC.
 */
export function parseIsoLocalDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
  if (!match) {
    return null;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  const valid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  return valid ? date : null;
}
