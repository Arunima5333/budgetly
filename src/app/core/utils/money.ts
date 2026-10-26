/**
 * Display currencies. INR is the base: every stored amount (transactions, limits, mock data) is in rupees,
 * and amounts are converted to the selected currency only when shown or typed.
 */
export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY';

/**
 * THE exchange-rate table: rupees per 1 unit of each currency.
 * Approximate values as of late 2025 (not live rates; there is no network access). Update them only here.
 */
export const INR_PER_UNIT: { [code in CurrencyCode]: number } = {
  INR: 1,
  USD: 88,
  EUR: 102,
  GBP: 117,
  JPY: 0.58
};

export interface CurrencyOption {
  code: CurrencyCode;
  /** Full name for screen-reader announcements, e.g. 'US dollar'. */
  name: string;
  /** Plain symbol shown before the number ('¥', never the full-width '￥'). */
  symbol: string;
  /** Locale used only for digit grouping, e.g. en-IN gives 1,20,000. */
  locale: string;
  /** Decimals shown in amounts and accepted in the amount fields' step. */
  decimals: number;
  /** Example for the category limit field, in this currency. */
  limitPlaceholder: string;
}

/**
 * The symbol is added by us rather than by Intl's currency style: 'narrowSymbol' isn't available in older
 * engines, ja-JP's own symbol is the full-width '￥', and some locales put the symbol after the number.
 */
export const CURRENCIES: CurrencyOption[] = [
  { code: 'INR', name: 'Indian rupee', symbol: '₹', locale: 'en-IN', decimals: 0, limitPlaceholder: '2,000' },
  { code: 'USD', name: 'US dollar', symbol: '$', locale: 'en-US', decimals: 2, limitPlaceholder: '25.00' },
  { code: 'EUR', name: 'Euro', symbol: '€', locale: 'en-IE', decimals: 2, limitPlaceholder: '25.00' },
  { code: 'GBP', name: 'British pound', symbol: '£', locale: 'en-GB', decimals: 2, limitPlaceholder: '20.00' },
  { code: 'JPY', name: 'Japanese yen', symbol: '¥', locale: 'ja-JP', decimals: 0, limitPlaceholder: '3,500' }
];

export const DEFAULT_CURRENCY: CurrencyCode = 'INR';

export function isCurrencyCode(value: any): value is CurrencyCode {
  return CURRENCIES.some(c => c.code === value);
}

/** The option for a code; unknown codes fall back to the default (INR). */
export function getCurrency(code: CurrencyCode): CurrencyOption {
  return CURRENCIES.filter(c => c.code === code)[0] || CURRENCIES.filter(c => c.code === DEFAULT_CURRENCY)[0];
}

function rateOf(code: CurrencyCode): number {
  return INR_PER_UNIT[getCurrency(code).code];
}

/** Rounds to `decimals` places, half away from zero. */
function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  const sign = value < 0 ? -1 : 1;
  return sign * Math.round(Math.abs(value) * factor + 1e-9) / factor;
}

/** Rupees -> the currency (unrounded). */
export function fromInr(inr: number, code: CurrencyCode): number {
  return inr / rateOf(code);
}

/** An amount in the currency -> rupees rounded to paise (what gets stored). NaN for non-numbers. */
export function toInr(amount: number, code: CurrencyCode): number {
  const value = typeof amount === 'number' ? amount : parseFloat(amount as any);
  return isFinite(value) ? roundTo(value * rateOf(code), 2) : NaN;
}

/** Prefill for an edit form: INR keeps its paise as stored; other currencies round to their decimals. */
export function inrToInputValue(inr: number, code: CurrencyCode): number {
  const currency = getCurrency(code);
  return currency.code === 'INR' ? inr : roundTo(fromInr(inr, code), currency.decimals);
}

/**
 * Rupees to save from an amount field. Round-trip safe: when the field still holds exactly the value it was
 * prefilled with (edit mode, untouched), the original stored rupees are returned, so nothing drifts.
 */
export function inputToInr(typed: any, code: CurrencyCode, prefilled: number | null = null,
                           originalInr: number | null = null): number {
  const value = typeof typed === 'number' ? typed : parseFloat(typed);
  if (originalInr !== null && prefilled !== null && value === prefilled) {
    return originalInr;
  }
  return toInr(value, code);
}

const numberFormats: { [key: string]: Intl.NumberFormat } = {};

/** The locale's grouping with fixed decimals (formatters are cached: the money pipe runs on every check). */
function groupDigits(value: number, locale: string, decimals: number): string {
  const key = locale + '|' + decimals;
  if (!numberFormats[key]) {
    numberFormats[key] = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  return numberFormats[key].format(value);
}

/**
 * Rupees shown in the currency: converted, rounded to its decimals, with its symbol and grouping,
 * e.g. 120000 -> '₹1,20,000' / '$1,363.64' / '¥206,897'. Negatives read '-$5.00'; a value that rounds
 * to 0 has no sign; '' for non-numbers.
 */
export function formatMoney(inr: number, code: CurrencyCode): string {
  if (typeof inr !== 'number' || !isFinite(inr)) {
    return '';
  }
  const currency = getCurrency(code);
  const amount = roundTo(Math.abs(fromInr(inr, code)), currency.decimals);
  return (inr < 0 && amount > 0 ? '-' : '') + currency.symbol + groupDigits(amount, currency.locale, currency.decimals);
}

/** True when the rupees show as zero in the currency after rounding to its decimals ($0.00, ¥0, ₹0). */
export function displaysAsZero(inr: number, code: CurrencyCode): boolean {
  return typeof inr === 'number' && isFinite(inr) && roundTo(Math.abs(fromInr(inr, code)), getCurrency(code).decimals) === 0;
}

/**
 * formatMoney with a sign put in front by the caller ('+' income, '−' expense), dropped when the amount
 * shows as zero, so it never reads '−$0.00'.
 */
export function formatSignedMoney(inr: number, code: CurrencyCode, sign: string): string {
  const text = formatMoney(inr, code);
  return text && sign && !displaysAsZero(inr, code) ? sign + text : text;
}

/**
 * How compact a short amount label is:
 * - 'full':       '$950', '$38.2k', '$120k'
 * - 'no-symbol':  '950', '38.2k', '120k'
 * - 'shortest':   '950', '38k', '120k' (thousands rounded to whole k)
 */
export type ShortMoneyStyle = 'full' | 'no-symbol' | 'shortest';

/**
 * Pure: short label for chart annotations, from rupees. Glanceable, so always whole units under 1,000
 * ('$950', never '$950.20'); from 1,000 thousands with one decimal, '.0' dropped ('$38.2k', '€20k');
 * 0, negative and non-finite -> symbol + '0'.
 */
export function formatShortMoney(inr: number, code: CurrencyCode, style: ShortMoneyStyle = 'full'): string {
  const symbol = style === 'full' ? getCurrency(code).symbol : '';
  const whole = Math.round(isFinite(inr) ? Math.max(0, fromInr(inr, code)) : 0);
  if (whole < 1000) {
    return symbol + whole;
  }
  const thousands = whole / 1000;
  const text = style === 'shortest' ? String(Math.round(thousands)) : thousands.toFixed(1).replace(/\.0$/, '');
  return symbol + text + 'k';
}
