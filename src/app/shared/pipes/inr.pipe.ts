import { Pipe, PipeTransform } from '@angular/core';

// minimumFractionDigits is required too: INR defaults to 2, and max < min throws in older engines.
const INR_FORMAT = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

/** Whole rupees with Indian grouping, e.g. 120000 -> '₹1,20,000'; '' for non-numbers. Shared with chart tooltips. */
export function formatInr(value: number): string {
  return typeof value === 'number' && isFinite(value) ? INR_FORMAT.format(value) : '';
}

/** Formats a number as whole rupees with Indian grouping, e.g. 120000 -> '₹1,20,000'. */
@Pipe({
  name: 'inr'
})
export class InrPipe implements PipeTransform {
  transform(value: number): string {
    return formatInr(value);
  }
}
