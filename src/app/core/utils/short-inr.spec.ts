import { formatInr } from '../../shared/pipes/inr.pipe';
import { formatShortInr } from './short-inr';

describe('formatShortInr', () => {
  it('shows whole rupees under 1,000', () => {
    expect(formatShortInr(0)).toBe('₹0');
    expect(formatShortInr(949.6)).toBe('₹950');
  });

  it('shows thousands with one decimal, dropping .0', () => {
    expect(formatShortInr(38200)).toBe('₹38.2k');
    expect(formatShortInr(20000)).toBe('₹20k');
    expect(formatShortInr(120000)).toBe('₹120k');
  });

  it('supports the no-symbol and shortest styles', () => {
    expect(formatShortInr(38200, 'no-symbol')).toBe('38.2k');
    expect(formatShortInr(38200, 'shortest')).toBe('38k');
    expect(formatShortInr(950, 'shortest')).toBe('950');
  });

  it('treats negative and non-finite values as 0', () => {
    expect(formatShortInr(-50)).toBe('₹0');
    expect(formatShortInr(NaN)).toBe('₹0');
    expect(formatShortInr(Infinity)).toBe('₹0');
  });
});

describe('formatInr', () => {
  it('formats whole rupees with Indian grouping', () => {
    expect(formatInr(120000)).toBe('₹1,20,000');
    expect(formatInr(51000)).toBe('₹51,000');
    expect(formatInr(0)).toBe('₹0');
  });

  it('rounds to whole rupees', () => {
    expect(formatInr(1234.56)).toBe('₹1,235');
  });

  it('returns an empty string for non-numbers', () => {
    expect(formatInr(NaN)).toBe('');
    expect(formatInr(undefined as any)).toBe('');
  });
});
