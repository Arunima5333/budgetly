import { firstOfMonthIsoLocal, formatDayMonth, formatMonthYear, isCurrentMonth, parseIsoLocalDate, todayIsoLocal } from './date-format';
import { MIN_SELECTABLE_MONTH, monthIndex } from './month-range';

describe('parseIsoLocalDate', () => {
  it('parses a real date as LOCAL midnight (no UTC day shift)', () => {
    const d = parseIsoLocalDate('2026-11-01');
    expect(d).not.toBeNull();
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(10);
    expect(d.getDate()).toBe(1);
    expect(d.getHours()).toBe(0);
  });

  it('accepts a leap day', () => {
    expect(parseIsoLocalDate('2024-02-29')).not.toBeNull();
  });

  it('rejects impossible dates and bad formats', () => {
    ['2026-13-01', '2026-02-30', '2025-02-29', 'abc', '', '2026-1-01', '2026-11-1', ' 2026-11-01'].forEach(v =>
      expect(parseIsoLocalDate(v)).toBeNull());
    expect(parseIsoLocalDate(null)).toBeNull();
  });
});

describe('month labels and today helpers', () => {
  it('formats month labels', () => {
    expect(formatMonthYear(2026, 10)).toBe('October 2026');
    expect(formatMonthYear(2020, 1)).toBe('January 2020');
    expect(formatDayMonth('2026-10-08')).toBe('8 Oct');
  });

  it('builds local ISO dates for today and the 1st of its month', () => {
    const today = new Date(2026, 8, 5);
    expect(todayIsoLocal(today)).toBe('2026-09-05');
    expect(firstOfMonthIsoLocal(today)).toBe('2026-09-01');
  });

  it('knows the current month', () => {
    const today = new Date(2026, 9, 21);
    expect(isCurrentMonth({ year: 2026, month: 10 }, today)).toBe(true);
    expect(isCurrentMonth({ year: 2026, month: 9 }, today)).toBe(false);
    expect(isCurrentMonth({ year: 2025, month: 10 }, today)).toBe(false);
  });

  it('orders months across years and starts the selectable range in January 2020', () => {
    expect(monthIndex({ year: 2025, month: 12 }) < monthIndex({ year: 2026, month: 1 })).toBe(true);
    expect(MIN_SELECTABLE_MONTH).toEqual({ year: 2020, month: 1 });
  });
});
