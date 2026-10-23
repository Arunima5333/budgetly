import { budgetHint } from './budget-hint';

describe('budgetHint', () => {
  it('is hidden when the month has no income', () => {
    expect(budgetHint(0, 1000, 500)).toEqual({ kind: 'hidden', amount: 0, warn: false });
  });

  it('shows the unbudgeted income while no valid limit is typed', () => {
    expect(budgetHint(75000, 51000, null)).toEqual({ kind: 'unbudgeted', amount: 24000, warn: false });
  });

  it('warns when budgets already exceed income and no limit is typed', () => {
    expect(budgetHint(50000, 51000.5, null)).toEqual({ kind: 'already-over', amount: 1000.5, warn: true });
  });

  it('shows what stays unbudgeted after the typed limit', () => {
    expect(budgetHint(75000, 51000, 4000)).toEqual({ kind: 'remaining', amount: 20000, warn: false });
    expect(budgetHint(75000, 51000, 24000)).toEqual({ kind: 'remaining', amount: 0, warn: false });
  });

  it('warns when the typed limit pushes the total above income', () => {
    expect(budgetHint(75000, 51000, 24000.01)).toEqual({ kind: 'over', amount: 0.01, warn: true });
  });
});
