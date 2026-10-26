import { FormControl, Validators } from '@angular/forms';

import { CurrencyCode } from './money';
import { amountDecimalsIn, amountErrorText, decimalPlaces, positiveAmountIn } from './validators';

describe('positiveAmountIn', () => {
  const valid = (value: any, code: CurrencyCode) => positiveAmountIn(() => code)(new FormControl(value)) === null;

  it('accepts amounts that are > 0 in the currency and in rupees', () => {
    expect(valid(10, 'USD')).toBe(true);
    expect(valid('0.01', 'USD')).toBe(true);
    expect(valid(1, 'JPY')).toBe(true);
    expect(valid(0.01, 'INR')).toBe(true);
    expect(valid(0.005, 'INR')).toBe(true);
  });

  it('rejects tiny amounts that would be 0 (shown as $0.00, or under ₹0.01)', () => {
    expect(valid(0.0001, 'USD')).toBe(false);
    expect(valid(0.004, 'GBP')).toBe(false);
    expect(valid(0.4, 'JPY')).toBe(false);
    expect(valid(0.004, 'INR')).toBe(false);
  });

  it('rejects empty, zero, negative and non-numeric values', () => {
    ['', null, 0, -5, 'abc'].forEach(v => expect(valid(v, 'USD')).toBe(false));
  });

  it('reads the currency at validation time', () => {
    let code: CurrencyCode = 'INR';
    const validator = positiveAmountIn(() => code);
    const control = new FormControl(0.4);
    expect(validator(control)).toBeNull();
    code = 'JPY';
    expect(validator(control)).toEqual({ positiveAmount: true });
  });
});

describe('amountDecimalsIn', () => {
  const valid = (value: any, code: CurrencyCode) => amountDecimalsIn(() => code)(new FormControl(value)) === null;

  it('allows only whole yen', () => {
    expect(valid(1000, 'JPY')).toBe(true);
    expect(valid(1.5, 'JPY')).toBe(false);
    expect(valid('1e3', 'JPY')).toBe(true);
    expect(valid(1e3, 'JPY')).toBe(true);
  });

  it('allows at most 2 decimals for USD, EUR, GBP and INR', () => {
    expect(valid(12.34, 'USD')).toBe(true);
    expect(valid(12.345, 'USD')).toBe(false);
    expect(valid('12.50', 'USD')).toBe(true);
    expect(valid('12.345', 'EUR')).toBe(false);
    expect(valid(0.99, 'INR')).toBe(true);
    expect(valid(1.001, 'INR')).toBe(false);
    expect(valid(5.1, 'GBP')).toBe(true);
  });

  it('leaves empty values to required', () => {
    expect(valid(null, 'USD')).toBe(true);
    expect(valid('', 'JPY')).toBe(true);
  });

  it('counts decimals without rounding, including exponent forms', () => {
    expect(decimalPlaces('12.50')).toBe(2);
    expect(decimalPlaces(12.345)).toBe(3);
    expect(decimalPlaces('1e3')).toBe(0);
    expect(decimalPlaces(1e-7)).toBe(7);
    expect(decimalPlaces('1.5e-2')).toBe(3);
  });
});

describe('amountErrorText', () => {
  const control = (value: any, code: CurrencyCode) => {
    const c = new FormControl(value, [Validators.required, positiveAmountIn(() => code), amountDecimalsIn(() => code)]);
    return c;
  };

  it('puts "greater than 0" before the decimals rule', () => {
    expect(amountErrorText(control(null, 'USD'), 'amount')).toBe('Enter an amount greater than 0.');
    expect(amountErrorText(control(0, 'USD'), 'limit')).toBe('Enter a limit greater than 0.');
    expect(amountErrorText(control(0.0001, 'USD'), 'amount')).toBe('Enter an amount greater than 0.');
    expect(amountErrorText(control(0.4, 'JPY'), 'amount')).toBe('Enter an amount greater than 0.');
  });

  it('names the decimals rule per currency', () => {
    expect(amountErrorText(control(1.5, 'JPY'), 'amount')).toBe('Enter a whole number of yen.');
    expect(amountErrorText(control(12.345, 'USD'), 'limit')).toBe('Use at most 2 decimal places.');
    expect(amountErrorText(control(1.001, 'INR'), 'amount')).toBe('Use at most 2 decimal places.');
    expect(amountErrorText(control(12.34, 'USD'), 'amount')).toBeNull();
  });
});
