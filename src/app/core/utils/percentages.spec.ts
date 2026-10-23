import { roundPercentages } from './percentages';

function sum(values: number[]): number {
  return values.reduce((s, v) => s + v, 0);
}

describe('roundPercentages', () => {
  it('always adds up to exactly 100', () => {
    const cases = [[1, 1, 1], [20000, 5923, 3606, 3485, 3066, 2953, 2270], [0.1, 0.2, 0.3], [1, 2, 3, 4, 5, 6, 7], [99, 1]];
    cases.forEach(values => expect(sum(roundPercentages(values))).toBe(100));
  });

  it('gives the missing points to the largest remainders (ties: larger value first)', () => {
    expect(roundPercentages([1, 1, 1])).toEqual([34, 33, 33]);
    expect(roundPercentages([2, 1])).toEqual([67, 33]);
  });

  it('keeps exact shares', () => {
    expect(roundPercentages([50, 25, 25])).toEqual([50, 25, 25]);
  });

  it('returns zeros for all-zero or empty input', () => {
    expect(roundPercentages([0, 0])).toEqual([0, 0]);
    expect(roundPercentages([])).toEqual([]);
  });

  it('can give a tiny share 0 while the total stays 100', () => {
    const result = roundPercentages([100000, 1]);
    expect(result).toEqual([100, 0]);
  });
});
