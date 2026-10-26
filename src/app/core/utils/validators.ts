import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CurrencyCode, getCurrency, toInr } from './money';

/** Valid when the value is a finite number that is still > 0 after rounding to paise. */
export function positiveAmount(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  const value = typeof raw === 'number' ? raw : parseFloat(raw);
  return isFinite(value) && Math.round(value * 100) > 0 ? null : { positiveAmount: true };
}

/**
 * The same rule for an amount typed in the form's currency: valid when it is > 0 at that currency's precision
 * (paise for INR, cents for USD/EUR/GBP, whole yen) AND still > 0 once converted to rupees and rounded to paise.
 * So $0.0001 (shows as $0.00, ₹0.0088) and ¥0.4 are rejected. The currency is read at validation time.
 */
export function positiveAmountIn(currency: () => CurrencyCode): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const code = currency();
    const raw = control.value;
    const value = typeof raw === 'number' ? raw : parseFloat(raw);
    const places = getCurrency(code).code === 'INR' ? 2 : getCurrency(code).decimals;
    const inr = toInr(value, code);
    return isFinite(value) && Math.round(value * Math.pow(10, places)) > 0 && inr > 0 ? null : { positiveAmount: true };
  };
}

/**
 * Decimal places of a value as typed. A plain decimal string is counted as written ('12.50' -> 2); numbers
 * (what a number input reports) and exponent forms are counted from their exact value ('1e3' -> 0,
 * 1e-7 -> 7), so nothing is rounded before counting.
 */
export function decimalPlaces(raw: any): number {
  if (typeof raw === 'string' && /^\s*[+-]?\d*\.\d+\s*$/.test(raw)) {
    return raw.trim().split('.')[1].length;
  }
  const value = typeof raw === 'number' ? raw : parseFloat(raw);
  if (!isFinite(value)) {
    return 0;
  }
  const parts = String(Math.abs(value)).split('e');
  const fraction = (parts[0].split('.')[1] || '').length;
  return Math.max(0, fraction - (parts[1] ? parseInt(parts[1], 10) : 0));
}

/** Most decimals an amount may be typed with: whole yen, otherwise 2 (paise / cents). */
export function maxInputDecimals(code: CurrencyCode): number {
  const currency = getCurrency(code);
  return currency.code === 'INR' ? 2 : currency.decimals;
}

/**
 * Rejects amounts typed with more decimals than the currency allows ({ decimals: { max } }); never rounds.
 * Empty values are left to Validators.required. The currency is read at validation time.
 */
export function amountDecimalsIn(currency: () => CurrencyCode): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const raw = control.value;
    if (raw === null || raw === undefined || raw === '') {
      return null;
    }
    const max = maxInputDecimals(currency());
    return decimalPlaces(raw) > max ? { decimals: { max } } : null;
  };
}

/** The message under an amount field: "greater than 0" first, then the decimals rule; null when valid. */
export function amountErrorText(control: AbstractControl, noun: 'amount' | 'limit'): string | null {
  if (!control.errors) {
    return null;
  }
  if (control.errors.required || control.errors.positiveAmount) {
    return noun === 'amount' ? 'Enter an amount greater than 0.' : 'Enter a limit greater than 0.';
  }
  if (control.errors.decimals) {
    return control.errors.decimals.max === 0 ? 'Enter a whole number of yen.' : 'Use at most 2 decimal places.';
  }
  return null;
}
