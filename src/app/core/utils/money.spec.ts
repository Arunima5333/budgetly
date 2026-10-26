import {
  CURRENCIES, displaysAsZero, formatMoney, formatShortMoney, formatSignedMoney, fromInr, getCurrency, INR_PER_UNIT, inputToInr,
  inrToInputValue, isCurrencyCode, toInr
} from './money';

describe('formatMoney (rupees in, selected currency out)', () => {
  it('converts and formats with each currency\'s symbol, grouping and decimals', () => {
    expect(formatMoney(120000, 'INR')).toBe('₹1,20,000');
    expect(formatMoney(38249, 'INR')).toBe('₹38,249');
    expect(formatMoney(120000, 'USD')).toBe('$1,363.64');
    expect(formatMoney(38249, 'USD')).toBe('$434.65');
    expect(formatMoney(120000, 'EUR')).toBe('€1,176.47');
    expect(formatMoney(38249, 'EUR')).toBe('€374.99');
    expect(formatMoney(120000, 'GBP')).toBe('£1,025.64');
    expect(formatMoney(38249, 'GBP')).toBe('£326.91');
    expect(formatMoney(120000, 'JPY')).toBe('¥206,897');
    expect(formatMoney(38249, 'JPY')).toBe('¥65,947');
  });

  it('keeps Indian grouping and whole rupees for INR', () => {
    expect(formatMoney(9999999, 'INR')).toBe('₹99,99,999');
    expect(formatMoney(1234.56, 'INR')).toBe('₹1,235');
    expect(formatMoney(0, 'INR')).toBe('₹0');
  });

  it('shows two decimals for USD, EUR and GBP even for whole values', () => {
    expect(formatMoney(880, 'USD')).toBe('$10.00');
    expect(formatMoney(0, 'GBP')).toBe('£0.00');
  });

  it('never uses the full-width yen sign', () => {
    expect(formatMoney(500, 'JPY')).not.toContain('￥');
  });

  it('puts the minus sign before the symbol, and drops it when the value rounds to 0', () => {
    expect(formatMoney(-500, 'INR')).toBe('-₹500');
    expect(formatMoney(-880, 'USD')).toBe('-$10.00');
    expect(formatMoney(-0.4, 'INR')).toBe('₹0');
    expect(formatMoney(-0.0001, 'USD')).toBe('$0.00');
    expect(formatMoney(-0.2, 'JPY')).toBe('¥0');
  });

  it('returns an empty string for non-numbers', () => {
    expect(formatMoney(NaN, 'USD')).toBe('');
    expect(formatMoney(Infinity, 'USD')).toBe('');
    expect(formatMoney(undefined as any, 'INR')).toBe('');
  });

  it('falls back to INR for an unknown code', () => {
    expect(formatMoney(120000, 'XYZ' as any)).toBe('₹1,20,000');
  });
});

describe('formatShortMoney', () => {
  it('converts, and shows whole units under 1,000', () => {
    expect(formatShortMoney(0, 'JPY')).toBe('¥0');
    expect(formatShortMoney(38249, 'USD')).toBe('$435');
    expect(formatShortMoney(950, 'INR')).toBe('₹950');
    expect(formatShortMoney(949.6, 'INR')).toBe('₹950');
  });

  it('shows thousands with one decimal, dropping .0', () => {
    expect(formatShortMoney(38249, 'JPY')).toBe('¥65.9k');
    expect(formatShortMoney(120000, 'USD')).toBe('$1.4k');
    expect(formatShortMoney(20000, 'INR')).toBe('₹20k');
    expect(formatShortMoney(120000, 'INR')).toBe('₹120k');
  });

  it('supports the no-symbol and shortest styles', () => {
    expect(formatShortMoney(38200, 'INR', 'no-symbol')).toBe('38.2k');
    expect(formatShortMoney(38200, 'INR', 'shortest')).toBe('38k');
    expect(formatShortMoney(120000, 'EUR', 'shortest')).toBe('1k');
  });

  it('treats negative and non-finite values as 0', () => {
    expect(formatShortMoney(-50, 'USD')).toBe('$0');
    expect(formatShortMoney(NaN, 'INR')).toBe('₹0');
    expect(formatShortMoney(Infinity, 'GBP')).toBe('£0');
  });
});

describe('conversion helpers', () => {
  it('has one rate per currency, INR as the base', () => {
    expect(INR_PER_UNIT.INR).toBe(1);
    CURRENCIES.forEach(c => expect(INR_PER_UNIT[c.code]).toBeGreaterThan(0));
    expect(fromInr(880, 'USD')).toBe(10);
  });

  it('converts a typed amount to rupees rounded to paise', () => {
    expect(toInr(10, 'USD')).toBe(880);
    expect(toInr(11.36, 'USD')).toBe(999.68);
    expect(toInr(9.99, 'EUR')).toBe(1018.98);
    expect(toInr(1, 'JPY')).toBe(0.58);
    expect(toInr(1234.567, 'INR')).toBe(1234.57);
    expect(toInr(0.0001, 'USD')).toBe(0.01);
    expect(toInr(0.00001, 'USD')).toBe(0);
    expect(isNaN(toInr('abc' as any, 'USD'))).toBe(true);
  });

  it('prefills edit forms in the currency\'s decimals (INR keeps its paise)', () => {
    expect(inrToInputValue(1000, 'USD')).toBe(11.36);
    expect(inrToInputValue(1000, 'JPY')).toBe(1724);
    expect(inrToInputValue(1234.5, 'INR')).toBe(1234.5);
  });

  it('round-trips: an untouched edit keeps the stored rupees exactly', () => {
    CURRENCIES.forEach(c => {
      [1000, 1234.56, 0.01, 99999.99].forEach(stored => {
        const shown = inrToInputValue(stored, c.code);
        expect(inputToInr(shown, c.code, shown, stored)).toBe(stored);
        // Same value typed as a string (how a number input can report it).
        expect(inputToInr(String(shown), c.code, shown, stored)).toBe(stored);
      });
    });
  });

  it('re-converts when the amount was changed (no drift guard needed)', () => {
    const shown = inrToInputValue(1000, 'USD');
    expect(inputToInr(12, 'USD', shown, 1000)).toBe(1056);
    // Without the guard, the rounded $11.36 would drift to ₹999.68.
    expect(inputToInr(shown, 'USD')).toBe(999.68);
    expect(inputToInr(10, 'USD')).toBe(880);
  });
});

describe('currency definitions', () => {
  it('lists INR, USD, EUR, GBP and JPY with plain symbols', () => {
    expect(CURRENCIES.map(c => c.symbol + ' ' + c.code).join(', ')).toBe('₹ INR, $ USD, € EUR, £ GBP, ¥ JPY');
  });

  it('validates codes and falls back to INR', () => {
    expect(isCurrencyCode('USD')).toBe(true);
    expect(isCurrencyCode('usd')).toBe(false);
    expect(isCurrencyCode(null)).toBe(false);
    expect(getCurrency('nope' as any).code).toBe('INR');
  });
});

describe('zero amounts', () => {
  it('knows when rupees display as zero in each currency', () => {
    expect(displaysAsZero(0.4, 'INR')).toBe(true);
    expect(displaysAsZero(0.5, 'INR')).toBe(false);
    expect(displaysAsZero(0.4, 'USD')).toBe(true);
    expect(displaysAsZero(0.44, 'USD')).toBe(false);
    expect(displaysAsZero(0.28, 'JPY')).toBe(true);
    expect(displaysAsZero(0.3, 'JPY')).toBe(false);
    expect(displaysAsZero(0.5, 'EUR')).toBe(true);
    expect(displaysAsZero(0.5, 'GBP')).toBe(true);
  });

  it('drops the sign of an amount that shows as zero, in every currency', () => {
    expect(formatSignedMoney(0.4, 'INR', '−')).toBe('₹0');
    expect(formatSignedMoney(0.4, 'USD', '−')).toBe('$0.00');
    expect(formatSignedMoney(0.4, 'EUR', '+')).toBe('€0.00');
    expect(formatSignedMoney(0.4, 'GBP', '−')).toBe('£0.00');
    expect(formatSignedMoney(0.2, 'JPY', '+')).toBe('¥0');
    expect(formatSignedMoney(0, 'USD', '−')).toBe('$0.00');
  });

  it('keeps the sign for amounts that show as non-zero', () => {
    expect(formatSignedMoney(880, 'USD', '−')).toBe('−$10.00');
    expect(formatSignedMoney(75000, 'INR', '+')).toBe('+₹75,000');
    expect(formatSignedMoney(0.5, 'JPY', '−')).toBe('−¥1');
    expect(formatSignedMoney(880, 'USD', '')).toBe('$10.00');
    expect(formatSignedMoney(NaN, 'USD', '−')).toBe('');
  });
});
