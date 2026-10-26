import { Pipe, PipeTransform } from '@angular/core';

import { CurrencyService } from '../../core/services/currency.service';
import { formatSignedMoney } from '../../core/utils/money';

/**
 * Shows rupees converted to the selected currency, e.g. 120000 -> '$1,363.64' (see formatMoney).
 * Impure so every amount updates as soon as the currency changes; it only divides and formats (cached Intl formatters).
 */
@Pipe({
  name: 'money',
  pure: false
})
export class MoneyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) { }

  /** Optional sign ('+' / '−') goes in front unless the amount shows as zero: {{ amount | money:sign }}. */
  transform(value: number, sign: string = ''): string {
    return formatSignedMoney(value, this.currencyService.currency, sign);
  }
}
