import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoryBudget } from '../../core/models/category-budget.model';
import { MonthSummary } from '../../core/models/month-summary.model';
import { Transaction } from '../../core/models/transaction.model';
import { YearMonth } from '../../core/models/year-month.model';
import { CurrencyService } from '../../core/services/currency.service';
import { DataService } from '../../core/services/data.service';
import { TodayService } from '../../core/services/today.service';
import { amountSign } from '../../core/utils/amount-sign';
import { adjustStatusForCurrency } from '../../core/utils/category-budgets';
import { formatDayMonth, formatMonthYear } from '../../core/utils/date-format';
import { CurrencyOption, DEFAULT_CURRENCY, getCurrency } from '../../core/utils/money';
import { adjustSummaryForCurrency } from '../../core/utils/month-summary';

interface SummaryView extends MonthSummary {
  /** Rounded spent / totalBudget as a percentage, unclamped (used in the aria-label). */
  spentPercent: number;
  /** Progress bar width: spentPercent clamped to 0-100. */
  barPercent: number;
}

/** Header and empty-state info for the selected month. */
interface OverviewState {
  /** Current month (add buttons, present-tense subtitle); otherwise a past, view-only month. */
  isCurrent: boolean;
  /** Whether the month has any transactions (income or expense); if not, an empty-state card is shown. */
  hasTransactions: boolean;
  /** e.g. 'September 2026'. */
  monthYear: string;
  /** e.g. 'October'. */
  monthName: string;
  /** "Fresh start" card: sum of all expense category limits and how many categories there are. */
  totalBudget: number;
  categoryCount: number;
  /** "Fresh start" card: the month before the selected one, e.g. 'September'. */
  previousMonthName: string;
}

/** A "Recent transactions" row, ready to display. */
interface RecentTransactionView {
  id: string;
  description: string;
  category: string;
  /** e.g. '8 Oct'. */
  dateLabel: string;
  /** First letter of the category, shown in the badge. */
  letter: string;
  /** Badge colour; null falls back to the neutral CSS default. */
  color: string | null;
  isIncome: boolean;
  /** '+' for income, U+2212 minus for expenses. */
  sign: string;
  amount: number;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  /** Header wording, add button / "View only" badge and which empty state (if any) to show. */
  state$: Observable<OverviewState>;

  /** Summary card values for the selected month; subscribed with the async pipe. */
  summary$: Observable<SummaryView>;

  /** "Budget by category" rows for the selected month; subscribed with the async pipe. */
  categoryBudgets$: Observable<CategoryBudget[]>;

  /** "Recent transactions" rows (newest 5) for the selected month; subscribed with the async pipe. */
  recentTransactions$: Observable<RecentTransactionView[]>;

  /** Header note for converted currencies ('Amounts shown in $ USD …'); null (hidden) for the INR base. */
  rateNote$: Observable<CurrencyOption | null>;

  constructor(private dataService: DataService, private today: TodayService, private currencyService: CurrencyService) {
    // Recompute the cards when the month changes and when transactions are added.
    const monthData$: Observable<YearMonth> = combineLatest(
      this.dataService.selectedMonth$,
      this.dataService.dataChanged$
    ).pipe(map(([selected]) => selected));

    this.state$ = monthData$.pipe(map(selected => this.toState(selected)));
    this.rateNote$ = this.currencyService.currency$.pipe(map(code => code === DEFAULT_CURRENCY ? null : getCurrency(code)));

    // Overspends that show as zero in the selected currency read as at limit / on budget (display only).
    this.summary$ = combineLatest(monthData$, this.currencyService.currency$).pipe(
      map(([selected, currency]) => adjustSummaryForCurrency(
        this.toSummaryView(this.dataService.getMonthSummary(selected.year, selected.month)), currency))
    );
    this.categoryBudgets$ = combineLatest(monthData$, this.currencyService.currency$).pipe(
      map(([selected, currency]) => this.dataService.getCategoryBudgets(selected.year, selected.month)
        .map(b => adjustStatusForCurrency(b, currency)))
    );
    this.recentTransactions$ = monthData$.pipe(
      map(selected => this.dataService.getRecentTransactions(selected.year, selected.month)
        .map(t => this.toRecentView(t)))
    );
  }

  private toState(selected: YearMonth): OverviewState {
    const longMonth = (year: number, month: number) =>
      new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'long' });
    return {
      isCurrent: this.today.isCurrentMonth(selected),
      hasTransactions: this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0,
      monthYear: formatMonthYear(selected.year, selected.month),
      monthName: longMonth(selected.year, selected.month),
      totalBudget: this.dataService.getMonthSummary(selected.year, selected.month).totalBudget,
      categoryCount: this.dataService.getCategories().length,
      // Month 0 rolls back to December of the previous year.
      previousMonthName: longMonth(selected.year, selected.month - 1)
    };
  }

  private toSummaryView(summary: MonthSummary): SummaryView {
    const spentPercent = Math.round(summary.spentRatio * 100);
    return {
      ...summary,
      spentPercent,
      barPercent: Math.min(100, Math.max(0, spentPercent))
    };
  }

  private toRecentView(t: Transaction): RecentTransactionView {
    const isIncome = t.type === 'income';
    return {
      id: t.id,
      description: t.description,
      category: t.category,
      dateLabel: formatDayMonth(t.date),
      letter: t.category.charAt(0).toUpperCase(),
      color: this.dataService.getTransactionColor(t),
      isIncome,
      sign: amountSign(t.type),
      amount: t.amount
    };
  }
}
