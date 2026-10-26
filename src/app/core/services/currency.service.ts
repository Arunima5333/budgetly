import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CurrencyCode, CurrencyOption, DEFAULT_CURRENCY, getCurrency, isCurrencyCode } from '../utils/money';

export const CURRENCY_STORAGE_KEY = 'budgetly.currency';

/** The saved code, or INR when it's missing, invalid or storage can't be read. */
function readStoredCurrency(): CurrencyCode {
  try {
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (isCurrencyCode(stored)) {
      return stored;
    }
  } catch (e) {
    // Fall back to the default.
  }
  return DEFAULT_CURRENCY;
}

/**
 * The one display currency for the whole app, persisted like the theme. Amounts are converted from rupees only
 * when shown or typed; stored amounts never change. Read synchronously at startup so the first render uses it.
 */
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  readonly currency$: BehaviorSubject<CurrencyCode>;

  constructor() {
    this.currency$ = new BehaviorSubject<CurrencyCode>(readStoredCurrency());
  }

  get currency(): CurrencyCode {
    return this.currency$.getValue();
  }

  get option(): CurrencyOption {
    return getCurrency(this.currency);
  }

  /** e.g. '$', for input-group prefixes. */
  get symbol(): string {
    return this.option.symbol;
  }

  /** Ignores unknown codes; saves the choice (best effort) and notifies subscribers when it changes. */
  setCurrency(code: CurrencyCode) {
    if (!isCurrencyCode(code) || code === this.currency) {
      return;
    }
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, code);
    } catch (e) {
      // Storage unavailable (private mode, blocked); the choice just won't persist.
    }
    this.currency$.next(code);
  }
}
