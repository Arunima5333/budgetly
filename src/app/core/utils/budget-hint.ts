/** Which hint the "Add category" form shows under Monthly limit. */
export type BudgetHintKind =
  | 'hidden'          // the month has no income
  | 'unbudgeted'      // no valid limit yet: "₹X of your income isn't budgeted yet."
  | 'remaining'       // valid limit, still within income: "₹X ... will still be unbudgeted after this."
  | 'over'            // valid limit pushes the total above income: "This puts your budgets ₹X above ..."
  | 'already-over';   // no valid limit, budgets already exceed income: "Your budgets are already ₹X above ..."

export interface BudgetHint {
  kind: BudgetHintKind;
  /** Rupees to show in the message (always >= 0). */
  amount: number;
  /** True for the amber (warning) states. Warnings never block saving. */
  warn: boolean;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

/**
 * Pure: the hint for a month's income, the current total of all category limits and the limit
 * being typed (null when empty or invalid).
 */
export function budgetHint(income: number, currentTotal: number, limit: number | null): BudgetHint {
  if (!(income > 0)) {
    return { kind: 'hidden', amount: 0, warn: false };
  }
  if (limit === null) {
    return currentTotal > income
      ? { kind: 'already-over', amount: round2(currentTotal - income), warn: true }
      : { kind: 'unbudgeted', amount: round2(income - currentTotal), warn: false };
  }
  const newTotal = currentTotal + limit;
  return newTotal > income
    ? { kind: 'over', amount: round2(newTotal - income), warn: true }
    : { kind: 'remaining', amount: round2(income - newTotal), warn: false };
}
