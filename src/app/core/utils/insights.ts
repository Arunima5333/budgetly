import { CategoryBudget } from '../models/category-budget.model';
import { CurrencyCode, DEFAULT_CURRENCY, displaysAsZero, formatMoney } from './money';

/** Badge colour family: up (red), down (green), saved (accent), overspent (red), neutral (gray). */
export type InsightTone = 'up' | 'down' | 'saved' | 'overspent' | 'neutral';

export interface Insight {
  tone: InsightTone;
  /** Short pill text, e.g. '↑ 24%'. */
  badge: string;
  /** One sentence of body text. */
  text: string;
}

interface Change {
  name: string;
  previous: number;
  current: number;
  /** (current - previous) / previous. */
  ratio: number;
}

function toPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

/** Whole-number percentage; a non-zero change that rounds to 0 reads '<1'. */
function percentText(fraction: number): string {
  const percent = Math.round(Math.abs(fraction) * 100);
  return percent === 0 && fraction !== 0 ? '<1' : String(percent);
}

/** Largest relative change first; ties broken by the larger absolute change. */
function biggest(changes: Change[]): Change | null {
  const sorted = changes.slice().sort((a, b) =>
    Math.abs(b.ratio) - Math.abs(a.ratio) || Math.abs(b.current - b.previous) - Math.abs(a.current - a.previous));
  return sorted.length ? sorted[0] : null;
}

/**
 * Pure: three insights for the selected month compared with the previous one.
 * 1. biggest % increase among categories that spent something last month and more this month;
 * 2. biggest % decrease among categories that spent something last month and less this month
 *    (down to 0 = 100%); unchanged categories never count;
 * 3. savings: income − expenses for the selected month.
 */
export function computeInsights(
  currentBudgets: CategoryBudget[],
  previousBudgets: CategoryBudget[],
  currentSummary: { income: number; spent: number },
  prevMonthName: string,
  currency: CurrencyCode = DEFAULT_CURRENCY
): Insight[] {
  const money = (value: number) => formatMoney(value, currency);
  const previousPaise: { [name: string]: number } = {};
  previousBudgets.forEach(b => previousPaise[b.name] = toPaise(b.spent));
  const previousTotal = previousBudgets.reduce((sum, b) => sum + toPaise(b.spent), 0);

  const changes: Change[] = currentBudgets
    .map(b => ({ name: b.name, previous: (previousPaise[b.name] || 0) / 100, current: toPaise(b.spent) / 100 }))
    // A change that shows as zero in the currency ('up from $11.36 to $11.36') counts as unchanged.
    .filter(c => c.previous > 0 && c.current !== c.previous && !displaysAsZero(c.current - c.previous, currency))
    .map(c => ({ ...c, ratio: (c.current - c.previous) / c.previous }));

  let increase: Insight;
  let decrease: Insight;
  if (previousTotal === 0) {
    const nothing = { tone: 'neutral' as InsightTone, badge: '—', text: 'No spending in ' + prevMonthName + ' to compare with.' };
    increase = nothing;
    decrease = { ...nothing };
  } else {
    const up = biggest(changes.filter(c => c.ratio > 0));
    increase = up
      ? {
        tone: 'up',
        badge: '↑ ' + percentText(up.ratio) + '%',
        text: up.name + ' spending is up from ' + money(up.previous) + ' in ' + prevMonthName + ' to ' + money(up.current) + '.'
      }
      : { tone: 'neutral', badge: 'No increase', text: 'No category spent more than in ' + prevMonthName + '.' };

    const down = biggest(changes.filter(c => c.ratio < 0));
    decrease = down
      ? {
        tone: 'down',
        badge: '↓ ' + percentText(down.ratio) + '%',
        text: down.name + ' costs dropped from ' + money(down.previous) + ' to ' + money(down.current) + '.'
      }
      : { tone: 'neutral', badge: 'No decrease', text: 'No category spent less than in ' + prevMonthName + '.' };
  }

  let savings: Insight;
  const income = currentSummary.income;
  if (!(income > 0)) {
    savings = { tone: 'neutral', badge: 'No income', text: 'No income recorded this month.' };
  } else {
    // Like the Overview summary: a difference that shows as zero in the currency (e.g. ₹0.30 over is '$0.00')
    // reads as on budget, '0% saved' / 'You kept $0.00 …', never '0% overspent' / 'You spent $0.00 more …'.
    const difference = (toPaise(income) - toPaise(currentSummary.spent)) / 100;
    const saved = displaysAsZero(difference, currency) ? 0 : difference;
    savings = saved >= 0
      ? {
        tone: 'saved',
        badge: percentText(saved / income) + '% saved',
        text: 'You kept ' + money(saved) + ' of your ' + money(income) + ' income this month.'
      }
      : {
        tone: 'overspent',
        badge: percentText(saved / income) + '% overspent',
        text: 'You spent ' + money(-saved) + ' more than your ' + money(income) + ' income this month.'
      };
  }
  return [increase, decrease, savings];
}
