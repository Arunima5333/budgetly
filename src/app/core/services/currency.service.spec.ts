import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { CURRENCY_STORAGE_KEY, CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let saved: string | null;

  beforeEach(() => {
    saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
    localStorage.removeItem(CURRENCY_STORAGE_KEY);
  });

  afterEach(() => {
    if (saved === null) {
      localStorage.removeItem(CURRENCY_STORAGE_KEY);
    } else {
      localStorage.setItem(CURRENCY_STORAGE_KEY, saved);
    }
  });

  it('defaults to INR when nothing is stored', () => {
    const service = new CurrencyService();
    expect(service.currency).toBe('INR');
    expect(service.symbol).toBe('₹');
  });

  it('reads a valid stored currency at startup', () => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, 'EUR');
    const service = new CurrencyService();
    expect(service.currency).toBe('EUR');
    expect(service.currency$.getValue()).toBe('EUR');
  });

  it('falls back to INR for an invalid stored value', () => {
    ['usd', 'BTC', '', 'null', '{"code":"USD"}'].forEach(value => {
      localStorage.setItem(CURRENCY_STORAGE_KEY, value);
      expect(new CurrencyService().currency).toBe('INR');
    });
  });

  it('falls back to INR when storage throws', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('blocked');
    expect(new CurrencyService().currency).toBe('INR');
  });

  it('saves and emits a new currency', () => {
    const service = new CurrencyService();
    const seen: string[] = [];
    service.currency$.subscribe(code => seen.push(code));
    service.setCurrency('GBP');
    expect(service.currency).toBe('GBP');
    expect(service.symbol).toBe('£');
    expect(localStorage.getItem(CURRENCY_STORAGE_KEY)).toBe('GBP');
    expect(seen).toEqual(['INR', 'GBP']);
  });

  it('makes the money pipe follow the selected currency', () => {
    const service = new CurrencyService();
    const pipe = new MoneyPipe(service);
    expect(pipe.transform(120000)).toBe('₹1,20,000');
    service.setCurrency('USD');
    expect(pipe.transform(120000)).toBe('$1,363.64');
    expect(pipe.transform(null)).toBe('');
  });

  it('ignores unknown codes and repeats', () => {
    const service = new CurrencyService();
    const seen: string[] = [];
    service.currency$.subscribe(code => seen.push(code));
    service.setCurrency('XYZ' as any);
    service.setCurrency('INR');
    expect(seen).toEqual(['INR']);
    expect(localStorage.getItem(CURRENCY_STORAGE_KEY)).toBeNull();
  });

  it('still switches when storage can\'t be written', () => {
    spyOn(Storage.prototype, 'setItem').and.throwError('blocked');
    const service = new CurrencyService();
    service.setCurrency('JPY');
    expect(service.currency).toBe('JPY');
  });
});
