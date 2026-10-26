import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';

import { CurrencyService } from '../../core/services/currency.service';
import { DataService } from '../../core/services/data.service';
import { TodayService } from '../../core/services/today.service';
import { formatMonthYear } from '../../core/utils/date-format';
import { monthIndex } from '../../core/utils/month-range';
import { computeInsights, Insight } from '../../core/utils/insights';
import { roundPercentages } from '../../core/utils/percentages';
import { formatMoney } from '../../core/utils/money';
import {
  BAR_LABEL_PADDING,
  BarChartColors,
  monthlyLabelsPlugin,
  readBarChartColors,
  registerRoundedBar
} from './monthly-bar-chart';

// Provided globally by bootstrap.bundle.min.js and chart.js/dist/Chart.min.js (registered in angular.json).
declare const bootstrap: any;
declare const Chart: any;

export type CompareMonths = 3 | 6 | 12;

/** One category's share of the month's spending. */
interface SpendingSlice {
  name: string;
  color: string;
  spent: number;
  /** Whole percentage; all slices add up to 100 (largest remainder). */
  percent: number;
  /** '18%', or '<1%' for a tiny non-zero share that rounds to 0. */
  percentLabel: string;
}

/** One month in the "Monthly spending" chart (oldest first; the last one is the selected month). */
interface MonthBar {
  /** 'May'. */
  shortName: string;
  year: number;
  /** 'May 2026'. */
  longName: string;
  total: number;
  /** Any transaction (income or expense) in the month; false draws the dashed "No data" bar. */
  hasData: boolean;
  selected: boolean;
}

/** Same stack as --bs-body-font-family, for the chart tooltips and drawn labels. */
const APP_FONT = '\'Plus Jakarta Sans\', system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif';

/** Below md the charts use their compact (mobile) sizes and options. */
const MOBILE_QUERY = '(max-width: 767.98px)';

/** Bar spacing per layout: bars sit closer together on mobile. */
const BAR_SPACING = {
  desktop: { barPercentage: 0.7, categoryPercentage: 0.8 },
  mobile: { barPercentage: 0.8, categoryPercentage: 0.9 }
};

const CHART_MISSING_WARNING = 'Budgetly: Chart.js is not loaded, so the Reports charts are skipped. ' +
  'If angular.json "scripts" changed, restart `ng serve` (it does not reload angular.json).';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * The canvases come and go with the page state (cards hidden for empty months), so each chart is created
   * when its canvas appears and destroyed when it leaves (see syncCharts).
   */
  @ViewChild('spendingCanvas') set spendingCanvas(ref: ElementRef) {
    this.spendingCanvasRef = ref || null;
    this.syncCharts();
  }

  @ViewChild('monthlyCanvas') set monthlyCanvas(ref: ElementRef) {
    this.monthlyCanvasRef = ref || null;
    this.syncCharts();
  }

  readonly compareOptions: { value: CompareMonths; label: string }[] = [
    { value: 3, label: 'Last 3 months' },
    { value: 6, label: 'Last 6 months' },
    { value: 12, label: 'Last 12 months' }
  ];

  /** e.g. 'October 2026'. */
  monthLabel = '';
  /** Past months show the "View only" badge. */
  isPastMonth = false;
  /** Whether the selected month has any transactions (income or expense). */
  hasTransactions = true;
  /** Long name of the selected month / the month before it, e.g. 'November' / 'October'. */
  monthName = '';
  previousMonthName = '';
  /** False at the earliest selectable month: there is no previous month to view. */
  canViewPrevious = true;
  /** Categories with spending this month, highest first. */
  slices: SpendingSlice[] = [];
  totalSpent = 0;

  /** "Monthly spending": one bar per month in the compare range, oldest first. */
  monthBars: MonthBar[] = [];
  /** Mean expenses of the months in the range that have transactions (income-only months count as 0), or null if none do. */
  monthlyAverage: number | null = null;

  /** Biggest increase, biggest decrease and savings vs the previous month. */
  insights: Insight[] = [];

  /** True below md: 180px doughnut, shorter bars, compact labels and Compare trigger. */
  isMobile = false;

  /** Comparison range for "Monthly spending" (shared by the header and the in-card mobile dropdown). */
  private compareSubject = new BehaviorSubject<CompareMonths>(6);

  private spendingCanvasRef: ElementRef | null = null;
  private monthlyCanvasRef: ElementRef | null = null;
  /** Set once the view (and Chart.js) is ready; charts are only created after that. */
  private chartsReady = false;
  private chart: any = null;
  private barChart: any = null;
  private barColors: BarChartColors | null = null;
  private themeObserver: MutationObserver | null = null;
  private subscription = new Subscription();
  private mobileQuery: MediaQueryList | null = null;

  private readonly onBreakpointChange = () => {
    const mobile = !!this.mobileQuery && this.mobileQuery.matches;
    if (mobile === this.isMobile) {
      return;
    }
    this.isMobile = mobile;
    this.cdr.detectChanges();
    // Fixed-size doughnut: recreate it at the new size (works even while hidden for an empty month).
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
      this.createDoughnut();
    }
    this.updateBarChart();
  }

  constructor(private dataService: DataService, private host: ElementRef, private cdr: ChangeDetectorRef,
              private today: TodayService, private currencyService: CurrencyService) { }

  /** Current month with no transactions yet: only the empty-state card (no range selector or charts). */
  get isCurrentEmpty(): boolean {
    return !this.isPastMonth && !this.hasTransactions;
  }

  /** Past month with no transactions: the Monthly spending chart (dashed "No data" bar) + the empty card. */
  get isPastEmpty(): boolean {
    return this.isPastMonth && !this.hasTransactions;
  }

  /** Past-empty subtitle, e.g. 'May to Oct 2026 · Oct has no data' (year on both ends across years). */
  get rangeNoDataText(): string {
    if (!this.monthBars.length) {
      return '';
    }
    const first = this.monthBars[0];
    const last = this.monthBars[this.monthBars.length - 1];
    const range = first.year === last.year
      ? first.shortName + ' to ' + last.shortName + ' ' + last.year
      : first.shortName + ' ' + first.year + ' to ' + last.shortName + ' ' + last.year;
    return range + ' · ' + last.shortName + ' has no data';
  }

  /** Doughnut side length in px (canvas and its box). */
  get doughnutSize(): number {
    return this.isMobile ? 180 : 200;
  }

  /** Compact trigger text for the in-card mobile Compare, e.g. '6 months' (menu items keep the full text). */
  get compareShortLabel(): string {
    return this.compareMonths + ' months';
  }

  get compareMonths(): CompareMonths {
    return this.compareSubject.getValue();
  }

  get compareLabel(): string {
    const option = this.compareOptions.filter(o => o.value === this.compareMonths)[0];
    return option ? option.label : '';
  }

  /** Text equivalent of the doughnut for screen readers. */
  get chartAriaLabel(): string {
    return 'Spending by category: ' + this.slices.map(s => s.name + ' ' + s.percentLabel).join(', ');
  }

  /** Text equivalent of the bar chart, e.g. 'Monthly spending, last 6 months: May $38,200, …, October $44,600 (selected)'. */
  get monthlyAriaLabel(): string {
    const currency = this.currencyService.currency;
    return 'Monthly spending, last ' + this.monthBars.length + ' months: ' +
      this.monthBars
        .map(b => b.longName + ' ' + (b.hasData ? formatMoney(b.total, currency) : 'no data') + (b.selected ? ' (selected)' : ''))
        .join(', ');
  }

  ngOnInit() {
    if (typeof window.matchMedia === 'function') {
      this.mobileQuery = window.matchMedia(MOBILE_QUERY);
      this.isMobile = this.mobileQuery.matches;
    }

    // Spending and categories change with the month and with added/edited transactions or categories;
    // the currency only changes how amounts read (insights text, doughnut tooltip).
    this.subscription.add(combineLatest(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.currencyService.currency$)
      .subscribe(([selected]) => {
        this.monthLabel = formatMonthYear(selected.year, selected.month);
        this.isPastMonth = !this.today.isCurrentMonth(selected);
        this.canViewPrevious = monthIndex(selected) > monthIndex(this.dataService.getMinSelectableMonth());
        this.hasTransactions = this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0;
        this.monthName = new Date(selected.year, selected.month - 1, 1).toLocaleDateString('en-US', { month: 'long' });
        // Month 0 rolls back to December of the previous year.
        this.previousMonthName = new Date(selected.year, selected.month - 2, 1).toLocaleDateString('en-US', { month: 'long' });
        const spending = this.dataService.getCategoryBudgets(selected.year, selected.month)
          .filter(b => b.spent > 0)
          .sort((a, b) => b.spent - a.spent);
        const percents = roundPercentages(spending.map(b => b.spent));
        this.slices = spending.map((b, i) => ({
          name: b.name,
          color: b.color,
          spent: b.spent,
          percent: percents[i],
          percentLabel: percents[i] === 0 ? '<1%' : percents[i] + '%'
        }));
        this.totalSpent = Math.round(spending.reduce((sum, b) => sum + b.spent, 0) * 100) / 100;
        this.updateChart();

        const previous = new Date(selected.year, selected.month - 2, 1);
        this.insights = computeInsights(
          this.dataService.getCategoryBudgets(selected.year, selected.month),
          this.dataService.getCategoryBudgets(previous.getFullYear(), previous.getMonth() + 1),
          this.dataService.getMonthSummary(selected.year, selected.month),
          previous.toLocaleDateString('en-US', { month: 'long' }),
          this.currencyService.currency
        );
      }));

    // Monthly totals also depend on the compare range; a currency change redraws the bar labels.
    this.subscription.add(combineLatest(this.dataService.selectedMonth$, this.dataService.dataChanged$, this.compareSubject,
      this.currencyService.currency$)
      .subscribe(([selected, , count]) => {
        const totals = this.dataService.getMonthlyExpenseTotals(selected.year, selected.month, count);
        this.monthBars = totals.map((t, i) => {
          const date = new Date(t.year, t.month - 1, 1);
          return {
            shortName: date.toLocaleDateString('en-US', { month: 'short' }),
            year: t.year,
            longName: date.toLocaleDateString('en-US', { month: 'long' }),
            total: t.total,
            hasData: t.hasData,
            selected: i === totals.length - 1
          };
        });
        // Only months with transactions count (an income-only month counts as 0); no-data months are left out.
        const withData = totals.filter(t => t.hasData);
        this.monthlyAverage = withData.length
          ? Math.round(withData.reduce((sum, t) => sum + t.total, 0) / withData.length)
          : null;
        this.updateBarChart();
      }));
  }

  ngAfterViewInit() {
    // Chart.js is a global script from angular.json; without it the page still shows the totals and lists.
    if (typeof Chart === 'undefined') {
      console.warn(CHART_MISSING_WARNING);
      return;
    }
    registerRoundedBar();
    this.barColors = readBarChartColors();
    this.chartsReady = true;
    this.syncCharts();
    if (this.mobileQuery) {
      this.toggleBreakpointListener(true);
    }
    // Re-colour the bar chart (whichever instance exists) when the light/dark toggle changes data-bs-theme.
    this.themeObserver = new MutationObserver(() => {
      this.barColors = readBarChartColors();
      this.updateBarChart();
    });
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
  }

  ngOnDestroy() {
    this.chartsReady = false;
    this.subscription.unsubscribe();
    if (this.mobileQuery) {
      this.toggleBreakpointListener(false);
      this.mobileQuery = null;
    }
    if (this.themeObserver) {
      this.themeObserver.disconnect();
      this.themeObserver = null;
    }
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    if (this.barChart) {
      this.barChart.destroy();
      this.barChart = null;
    }
    // Bootstrap creates dropdown instances lazily on first click; release both with the page.
    if (typeof bootstrap === 'undefined') {
      return;
    }
    const toggles = this.host.nativeElement.querySelectorAll('[data-bs-toggle="dropdown"]');
    Array.prototype.forEach.call(toggles, (toggle: Element) => {
      const instance = bootstrap.Dropdown.getInstance(toggle);
      if (instance) {
        instance.dispose();
      }
    });
  }

  setCompareMonths(value: CompareMonths) {
    if (value !== this.compareMonths) {
      this.compareSubject.next(value);
    }
  }

  trackByName(index: number, slice: SpendingSlice): string {
    return slice.name;
  }

  /** Current-empty card button: show last month's report (stays on /reports). */
  viewPreviousMonth() {
    this.dataService.previousMonth();
  }

  /** 'change' listener on the md media query; the old addListener API only for browsers without it (older Safari). */
  private toggleBreakpointListener(add: boolean) {
    const query: any = this.mobileQuery;
    if (typeof query.addEventListener === 'function') {
      if (add) {
        query.addEventListener('change', this.onBreakpointChange);
      } else {
        query.removeEventListener('change', this.onBreakpointChange);
      }
    } else if (add) {
      query.addListener(this.onBreakpointChange);
    } else {
      query.removeListener(this.onBreakpointChange);
    }
  }

  /**
   * One chart per canvas that is in the DOM: destroys a chart whose canvas has gone (or been replaced)
   * and creates one for a canvas that has none. Safe to call any time; does nothing before the view is ready.
   */
  private syncCharts() {
    if (!this.chartsReady) {
      return;
    }
    const spendingEl = this.spendingCanvasRef ? this.spendingCanvasRef.nativeElement : null;
    if (this.chart && this.chart.canvas !== spendingEl) {
      this.chart.destroy();
      this.chart = null;
    }
    if (!this.chart && spendingEl) {
      this.createDoughnut();
    }
    const monthlyEl = this.monthlyCanvasRef ? this.monthlyCanvasRef.nativeElement : null;
    if (this.barChart && this.barChart.canvas !== monthlyEl) {
      this.barChart.destroy();
      this.barChart = null;
    }
    if (!this.barChart && monthlyEl) {
      this.createBarChart();
    }
  }

  private createDoughnut() {
    if (!this.spendingCanvasRef) {
      return;
    }
    // One instance per canvas, updated in place while the canvas exists.
    // Its fixed size comes from the canvas attributes, set here for the current breakpoint.
    const canvas: HTMLCanvasElement = this.spendingCanvasRef.nativeElement;
    canvas.width = this.doughnutSize;
    canvas.height = this.doughnutSize;
    canvas.style.width = '';
    canvas.style.height = '';
    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: { labels: [], datasets: [{ data: [], backgroundColor: [], borderWidth: 0, hoverBorderWidth: 0 }] },
      options: {
        responsive: false,
        cutoutPercentage: 70,
        legend: { display: false },
        animation: { animateRotate: true, duration: 500 },
        tooltips: {
          displayColors: true,
          titleFontFamily: APP_FONT,
          bodyFontFamily: APP_FONT,
          callbacks: {
            title: () => '',
            label: (item: any) => {
              const slice = this.slices[item.index];
              const amount = slice ? formatMoney(slice.spent, this.currencyService.currency) : '';
              return slice ? slice.name + ': ' + amount + ' (' + slice.percentLabel + ')' : '';
            }
          }
        }
      }
    });
    this.updateChart();
  }

  private createBarChart() {
    if (!this.monthlyCanvasRef) {
      return;
    }
    this.barChart = new Chart(this.monthlyCanvasRef.nativeElement, {
      type: 'roundedBar',
      // Moderate, evenly spaced bars; capped so 3-month bars don't get huge.
      data: { labels: [], datasets: [{ data: [], backgroundColor: [], maxBarThickness: 36 }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: { enabled: false },
        hover: { mode: null },
        animation: { duration: 400 },
        layout: { padding: { top: BAR_LABEL_PADDING.top, bottom: BAR_LABEL_PADDING.bottom, left: 0, right: 0 } },
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false, ticks: { beginAtZero: true, min: 0 } }]
        }
      },
      // Baseline, amount labels, month labels and dashed "No data" bars (dataset.noData);
      // colours read at draw time so theme changes apply.
      plugins: [monthlyLabelsPlugin(() => this.barColors || readBarChartColors(), APP_FONT, () => this.isMobile,
        () => this.currencyService.currency)]
    });
    this.updateBarChart();
  }

  /** Updates the doughnut in place (labels, values, colours). */
  private updateChart() {
    if (!this.chart) {
      return;
    }
    this.chart.data.labels = this.slices.map(s => s.name);
    const dataset = this.chart.data.datasets[0];
    dataset.data = this.slices.map(s => s.spent);
    dataset.backgroundColor = this.slices.map(s => s.color);
    dataset.hoverBackgroundColor = this.slices.map(s => s.color);
    this.chart.update();
  }

  /** Updates the bar chart in place: bar count (3/6/12), values, colours (selected month = accent) and mobile spacing. */
  private updateBarChart() {
    if (!this.barChart) {
      return;
    }
    const colors = this.barColors || readBarChartColors();
    this.barChart.data.labels = this.monthBars.map(b => b.shortName);
    const dataset = this.barChart.data.datasets[0];
    dataset.data = this.monthBars.map(b => b.total);
    // Read by monthlyLabelsPlugin: months with no transactions get a dashed "No data" bar.
    dataset.noData = this.monthBars.map(b => !b.hasData);
    dataset.backgroundColor = this.monthBars.map(b => b.selected ? colors.accent : colors.muted);
    dataset.hoverBackgroundColor = dataset.backgroundColor;
    const spacing = this.isMobile ? BAR_SPACING.mobile : BAR_SPACING.desktop;
    dataset.barPercentage = spacing.barPercentage;
    dataset.categoryPercentage = spacing.categoryPercentage;
    this.barChart.update();
  }
}
