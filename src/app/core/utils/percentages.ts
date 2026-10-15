/**
 * Pure: whole-number percentages of `values` that add up to exactly 100 (largest-remainder method).
 * Each value gets the floor of its exact share; the points still missing go to the values with the
 * largest fractional remainders (ties: larger value first). All zeros (or no values) -> all zeros.
 */
export function roundPercentages(values: number[]): number[] {
  const total = values.reduce((sum, v) => sum + v, 0);
  if (!(total > 0)) {
    return values.map(() => 0);
  }
  const exact = values.map(v => v / total * 100);
  const result = exact.map(Math.floor);
  let missing = 100 - result.reduce((sum, v) => sum + v, 0);
  const order = exact
    .map((e, i) => ({ i, remainder: e - Math.floor(e), value: values[i] }))
    .sort((a, b) => b.remainder - a.remainder || b.value - a.value);
  for (let k = 0; missing > 0 && k < order.length; k++, missing--) {
    result[order[k].i]++;
  }
  return result;
}
