import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { YearMonth } from '../../../core/models/year-month.model';
import { DataService } from '../../../core/services/data.service';
import { TodayService } from '../../../core/services/today.service';
import { formatMonthYear } from '../../../core/utils/date-format';
import { monthIndex } from '../../../core/utils/month-range';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

/** One button in the picker grid. */
interface PickerMonth {
  /** 1-based. */
  month: number;
  /** 'Jan'. */
  shortName: string;
  /** 'January'. */
  longName: string;
  selected: boolean;
  /** The current month (per TodayService). */
  current: boolean;
  /** After the current month, or before January 2020 (the selected month is never disabled). */
  disabled: boolean;
}

let nextId = 0;

/**
 * ‹ October 2026 › month selector, shared by every page. Reads and writes the one selected month
 * in DataService, so changing it on any page changes it everywhere. › is disabled on the current month.
 * ‹ is disabled on January 2020. The month name opens a Bootstrap dropdown month picker (year arrows + 3x4 month
 * grid) under the box: any month from January 2020 to the current month can be picked, with or without data.
 */
@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('previousButton') previousButton: ElementRef;
  @ViewChild('nextButton') nextButton: ElementRef;
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('previousYearButton') previousYearButton: ElementRef;
  @ViewChild('nextYearButton') nextYearButton: ElementRef;

  /** e.g. 'October 2026'. */
  label$: Observable<string>;

  /** True on the current month: › is disabled. */
  atCurrentMonth$: Observable<boolean>;

  /** True on January 2020 (the earliest selectable month): ‹ is disabled. */
  atFirstMonth$: Observable<boolean>;

  /** Unique per instance (several selectors can exist while routes change). */
  private readonly uid = 'month-picker-' + (++nextId);
  readonly ids = { toggle: this.uid + '-toggle', year: this.uid + '-year' };

  /** Year shown in the picker (reset to the selected month's year on every open). */
  pickerYear = 0;
  pickerMonths: PickerMonth[] = [];
  canPreviousYear = false;
  canNextYear = false;

  private dropdown: any = null;

  /** Before showing: open on the selected month's year. */
  private readonly onShow = () => {
    this.pickerYear = this.dataService.getSelectedMonth().year;
    this.buildPicker();
    this.cdr.detectChanges();
  }

  /**
   * Arrow keys in the month grid. Listens on window in the capture phase: Bootstrap's own dropdown key handler
   * (document, capture) would otherwise swallow ArrowUp/ArrowDown for its .dropdown-item lists.
   */
  private readonly onWindowKeydown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (this.menu && target && target.classList && target.classList.contains('picker-month') &&
        this.menu.nativeElement.contains(target)) {
      this.onGridKeydown(event);
    }
  }

  /** Once shown: focus the selected month (or the first enabled one). */
  private readonly onShown = () => {
    const menu: HTMLElement = this.menu.nativeElement;
    const target = menu.querySelector('.picker-month[aria-pressed="true"]:not(:disabled)') as HTMLElement
      || menu.querySelector('.picker-month:not(:disabled)') as HTMLElement;
    if (target) {
      target.focus();
    }
  }

  constructor(private dataService: DataService, private today: TodayService, private cdr: ChangeDetectorRef) {
    this.label$ = this.dataService.selectedMonth$.pipe(map(selected => formatMonthYear(selected.year, selected.month)));
    this.atCurrentMonth$ = this.dataService.isCurrentMonthSelected$;
    this.atFirstMonth$ = this.dataService.isFirstSelectableMonthSelected$;
  }

  ngAfterViewInit() {
    if (typeof bootstrap === 'undefined' || !this.toggle) {
      return;
    }
    const toggle: HTMLElement = this.toggle.nativeElement;
    // Config comes from the data attributes (static display, auto-close outside).
    this.dropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
    toggle.addEventListener('show.bs.dropdown', this.onShow);
    toggle.addEventListener('shown.bs.dropdown', this.onShown);
    window.addEventListener('keydown', this.onWindowKeydown, true);
  }

  ngOnDestroy() {
    if (!this.dropdown) {
      return;
    }
    const toggle: HTMLElement = this.toggle.nativeElement;
    toggle.removeEventListener('show.bs.dropdown', this.onShow);
    toggle.removeEventListener('shown.bs.dropdown', this.onShown);
    window.removeEventListener('keydown', this.onWindowKeydown, true);
    this.dropdown.dispose();
    this.dropdown = null;
  }

  previousMonth() {
    this.dataService.previousMonth();
    // Landing on January 2020 disables ‹; move focus to › so it doesn't drop to <body>.
    const previous = this.previousButton ? this.previousButton.nativeElement : null;
    const atFirst = monthIndex(this.dataService.getSelectedMonth()) <= monthIndex(this.dataService.getMinSelectableMonth());
    if (atFirst && previous && document.activeElement === previous && this.nextButton) {
      this.nextButton.nativeElement.focus();
    }
  }

  nextMonth() {
    this.dataService.nextMonth();
    // Landing on the current month disables ›; move focus to ‹ so it doesn't drop to <body>.
    const next = this.nextButton ? this.nextButton.nativeElement : null;
    if (this.today.isCurrentMonth(this.dataService.getSelectedMonth()) && next && document.activeElement === next && this.previousButton) {
      this.previousButton.nativeElement.focus();
    }
  }

  /** Year arrows: only the displayed year changes (the panel stays open, the selection stays). */
  shiftYear(delta: number) {
    this.pickerYear += delta;
    this.buildPicker();
    this.cdr.detectChanges();
    // The arrow just used may now be disabled (first-data or current year): keep focus in the panel.
    const used = delta < 0 ? this.previousYearButton : this.nextYearButton;
    const other = delta < 0 ? this.nextYearButton : this.previousYearButton;
    if (used && other && used.nativeElement.disabled && document.activeElement === used.nativeElement) {
      other.nativeElement.focus();
    }
  }

  /** Selects the month, closes the panel and returns focus to the month name. */
  pickMonth(m: PickerMonth) {
    if (m.disabled) {
      return;
    }
    this.dataService.setSelectedMonth(this.pickerYear, m.month);
    if (this.dropdown) {
      this.dropdown.hide();
    }
    if (this.toggle) {
      this.toggle.nativeElement.focus();
    }
  }

  /** Arrow keys move between enabled months (left/right by one, up/down by a row of 3), skipping disabled ones. */
  onGridKeydown(event: KeyboardEvent) {
    const steps: { [key: string]: number } = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -3, ArrowDown: 3 };
    const step = steps[event.key];
    if (!step) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const buttons: HTMLButtonElement[] = Array.prototype.slice.call(this.menu.nativeElement.querySelectorAll('.picker-month'));
    let index = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (index === -1) {
      return;
    }
    for (index += step; index >= 0 && index < buttons.length; index += step) {
      if (!buttons[index].disabled) {
        buttons[index].focus();
        return;
      }
    }
  }

  trackByMonth(index: number, m: PickerMonth): number {
    return m.month;
  }

  /** Month buttons and year-arrow states for pickerYear. */
  private buildPicker() {
    const selected = this.dataService.getSelectedMonth();
    const current = this.today.currentYearMonth();
    const min: YearMonth = this.dataService.getMinSelectableMonth();
    const year = this.pickerYear;
    this.pickerMonths = [];
    for (let month = 1; month <= 12; month++) {
      const date = new Date(year, month - 1, 1);
      const isSelected = selected.year === year && selected.month === month;
      const index = monthIndex({ year, month });
      const unavailable = index > monthIndex(current) || index < monthIndex(min);
      this.pickerMonths.push({
        month,
        shortName: date.toLocaleDateString('en-US', { month: 'short' }),
        longName: date.toLocaleDateString('en-US', { month: 'long' }),
        selected: isSelected,
        current: current.year === year && current.month === month,
        disabled: unavailable && !isSelected
      });
    }
    this.canPreviousYear = year > min.year;
    this.canNextYear = year < current.year;
  }
}
