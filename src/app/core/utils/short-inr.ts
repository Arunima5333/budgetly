/**
 * How compact a short amount label is:
 * - 'full':       '₹950', '₹38.2k', '₹120k'
 * - 'no-symbol':  '950', '38.2k', '120k'
 * - 'shortest':   '950', '38k', '120k' (thousands rounded to whole k)
 */
export type ShortInrStyle = 'full' | 'no-symbol' | 'shortest';

/**
 * Pure: short rupee label for chart annotations.
 * Under 1,000 → whole rupees ('₹950'); from 1,000 → thousands with one decimal, '.0' dropped
 * ('₹38.2k', '₹20k', '₹120k'); 0 → '₹0'.
 */
export function formatShortInr(value: number, style: ShortInrStyle = 'full'): string {
  const symbol = style === 'full' ? '₹' : '';
  const rupees = Math.round(isFinite(value) ? Math.max(0, value) : 0);
  if (rupees < 1000) {
    return symbol + rupees;
  }
  const thousands = rupees / 1000;
  const text = style === 'shortest' ? String(Math.round(thousands)) : thousands.toFixed(1).replace(/\.0$/, '');
  return symbol + text + 'k';
}
