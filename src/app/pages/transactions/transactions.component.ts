import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Transaction } from '../../core/models/transaction.model';
import { DataService } from '../../core/services/data.service';
import { TodayService } from '../../core/services/today.service';
import { AddTransactionModalComponent } from '../../shared/components/add-transaction-modal/add-transaction-modal.component';
import { DeleteTransactionModalComponent } from '../../shared/components/delete-transaction-modal/delete-transaction-modal.component';
import { amountSign } from '../../core/utils/amount-sign';
import { formatDayMonth, formatMonthYear } from '../../core/utils/date-format';
import {
  DEFAULT_TRANSACTION_FILTERS,
  filterTransactions,
  TransactionFilters,
  TransactionSort,
  TransactionTypeFilter
} from '../../core/utils/filter-transactions';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

interface DropdownOption<T> {
  value: T;
  label: string;
  description?: string;
}

/** One table row / mobile list item, ready to display. */
interface TransactionRow {
  id: string;
  /** e.g. '8 Oct'. */
  dateLabel: string;
  description: string;
  category: string;
  /** Dot/badge colour; null falls back to the neutral CSS default. */
  color: string | null;
  /** First letter of the category, for the mobile badge. */
  letter: string;
  isIncome: boolean;
  /** '+' or U+2212 minus. */
  sign: string;
  amount: number;
}

/** Everything the template needs, computed once per change. */
interface TransactionsView {
  /** e.g. 'October 2026'. */
  monthLabel: string;
  /** Whether the selected month has any transactions before filtering (for the empty state). */
  monthHasTransactions: boolean;
  /** Current month: "+ Add transaction" is shown; past months are view only. */
  canAdd: boolean;
  rows: TransactionRow[];
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('addTxn') addTxn: AddTransactionModalComponent;
  @ViewChild('deleteModal') deleteModal: DeleteTransactionModalComponent;
  @ViewChild('resultsCard') resultsCard: ElementRef;

  readonly typeOptions: DropdownOption<TransactionTypeFilter>[] = [
    { value: 'all', label: 'All types', description: 'Everything' },
    { value: 'expense', label: 'Expenses', description: 'Money spent' },
    { value: 'income', label: 'Income', description: 'Money coming in, e.g. salary' }
  ];

  readonly sortOptions: DropdownOption<TransactionSort>[] = [
    { value: 'newest', label: 'Newest first' },
    { value: 'oldest', label: 'Oldest first' },
    { value: 'amount', label: 'Highest amount' }
  ];

  /** Month label, filtered + sorted rows and empty-state info for the selected month. */
  view$: Observable<TransactionsView>;

  /** Filter state lives in the component, so it resets when leaving the page. */
  private filtersSubject = new BehaviorSubject<TransactionFilters>({ ...DEFAULT_TRANSACTION_FILTERS });


  constructor(
    private dataService: DataService,
    private host: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private today: TodayService
  ) {

    // Recomputes on month change, on added transactions and on any filter change.
    this.view$ = combineLatest(
      this.dataService.selectedMonth$,
      this.dataService.dataChanged$,
      this.filtersSubject
    ).pipe(
      map(([selected, , filters]) => {
        const monthTransactions = this.dataService.getTransactionsForMonth(selected.year, selected.month);
        return {
          monthLabel: formatMonthYear(selected.year, selected.month),
          monthHasTransactions: monthTransactions.length > 0,
          canAdd: this.today.isCurrentMonth(selected),
          rows: filterTransactions(monthTransactions, filters).map(t => this.toRow(t))
        };
      })
    );
  }

  /** Expense category names, read live because users can add categories. */
  get expenseCategoryNames(): string[] {
    return this.dataService.getCategories().map(c => c.name);
  }

  get incomeCategoryNames(): string[] {
    return this.dataService.getIncomeCategories().map(c => c.name);
  }

  /**
   * Deep link from Budgets ("View transactions"): ?category=<name> preselects that category with
   * default filters otherwise. Matched trimmed and case-insensitively against expense and income names
   * (e.g. ?category=food), selecting the STORED name; unknown or empty values are ignored. The param is then
   * removed from the URL so later pill changes don't disagree with it and a refresh shows the default filters.
   */
  ngOnInit() {
    const param = this.route.snapshot.queryParamMap.get('category');
    if (param === null) {
      return;
    }
    const category = this.dataService.findCategoryName(param);
    if (category) {
      this.filtersSubject.next({ ...DEFAULT_TRANSACTION_FILTERS, type: 'all', category });
      // After render: bring the selected pill into view in the sideways-scrolling mobile row.
      setTimeout(() => {
        const pill = this.host.nativeElement.querySelector('.pill-row [aria-pressed="true"]');
        if (pill) {
          pill.scrollIntoView({ inline: 'nearest', block: 'nearest' });
        }
      });
    }
    this.router.navigate([], { relativeTo: this.route, queryParams: {}, replaceUrl: true });
  }

  get filters(): TransactionFilters {
    return this.filtersSubject.getValue();
  }

  get typeLabel(): string {
    return this.optionLabel(this.typeOptions, this.filters.type);
  }

  get sortLabel(): string {
    return this.optionLabel(this.sortOptions, this.filters.sort);
  }

  /** Category pills for the current type: expense categories, income categories, or both. */
  get categoryNames(): string[] {
    switch (this.filters.type) {
      case 'expense':
        return this.expenseCategoryNames;
      case 'income':
        return this.incomeCategoryNames;
      default:
        return this.expenseCategoryNames.concat(this.incomeCategoryNames);
    }
  }

  setQuery(query: string) {
    this.update({ query });
  }

  clearSearch() {
    this.update({ query: '' });
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  setType(type: TransactionTypeFilter) {
    this.update({ type });
    // Drop a category that the new type doesn't offer.
    if (this.filters.category && this.categoryNames.indexOf(this.filters.category) === -1) {
      this.update({ category: null });
    }
  }

  setCategory(category: string | null) {
    this.update({ category });
  }

  setSort(sort: TransactionSort) {
    this.update({ sort });
  }

  /** Opens the shared modal in edit mode for this row (pencil on desktop, row tap on mobile). */
  editTransaction(row: TransactionRow) {
    const transaction = this.dataService.getTransactionById(row.id);
    if (transaction && this.addTxn) {
      this.addTxn.openForEdit(transaction);
    }
  }

  /** Table bin button: asks for confirmation in the delete dialog. */
  deleteTransaction(row: TransactionRow) {
    const transaction = this.dataService.getTransactionById(row.id);
    if (transaction && this.deleteModal) {
      this.deleteModal.open(transaction);
    }
  }

  /**
   * After a delete the trigger row is gone: focus the results card, or, when that was the current month's last
   * transaction, the "+ Add transaction" button in the empty-state card (once it has rendered).
   */
  onTransactionDeleted() {
    setTimeout(() => {
      if (this.resultsCard) {
        this.resultsCard.nativeElement.focus({ preventScroll: true });
        return;
      }
      const add: HTMLElement | null = this.host.nativeElement.querySelector('app-empty-state .btn-primary');
      if (add) {
        add.focus();
      }
    });
  }

  /**
   * After a cancelled delete, focus is normally back on the bin button. When the dialog came
   * from the edit modal there was nothing focused to return to, so focus that row's edit control.
   */
  onDeleteCancelled(transaction: Transaction) {
    if (document.activeElement && document.activeElement !== document.body) {
      return;
    }
    // Compared, not put in a selector: ids are any saved string (quotes, backslashes).
    const controls = this.host.nativeElement.querySelectorAll('[data-edit-id]');
    const visible = Array.prototype.filter.call(controls, (el: HTMLElement) =>
      el.getAttribute('data-edit-id') === transaction.id && el.offsetParent !== null)[0];
    if (visible) {
      visible.focus({ preventScroll: true });
    } else if (this.resultsCard) {
      this.resultsCard.nativeElement.focus({ preventScroll: true });
    }
  }

  /**
   * Phones (sideways-scrolling pill row): when a pill gets KEYBOARD focus, scroll only the row so the whole pill
   * and its focus ring (4px each side) are visible. Never scrolls the page; nothing happens when the pill is
   * already fully visible, on mouse/touch focus, or when the row doesn't scroll (wrapping pills from md up).
   */
  onPillFocus(event: FocusEvent) {
    const pill = event.target as HTMLElement;
    const row = event.currentTarget as HTMLElement;
    if (!pill || !pill.classList || !pill.classList.contains('filter-pill') || row.scrollWidth <= row.clientWidth) {
      return;
    }
    try {
      if (!pill.matches(':focus-visible')) {
        return;
      }
    } catch (e) {
      // Browsers without :focus-visible: treat every focus as keyboard focus.
    }
    const ring = 4;
    const left = pill.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft - ring;
    const right = left + pill.offsetWidth + 2 * ring;
    let target = row.scrollLeft;
    if (left < row.scrollLeft) {
      target = left;
    } else if (right > row.scrollLeft + row.clientWidth) {
      target = right - row.clientWidth;
    }
    if (Math.abs(target - row.scrollLeft) < 1) {
      return;
    }
    const reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof row.scrollTo === 'function') {
      row.scrollTo({ left: target, behavior: reduce ? 'auto' : 'smooth' });
    } else {
      row.scrollLeft = target;
    }
  }

  trackById(index: number, row: TransactionRow): string {
    return row.id;
  }

  ngOnDestroy() {
    // Bootstrap creates dropdown instances lazily on first click; release them with the page.
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

  private update(changes: Partial<TransactionFilters>) {
    this.filtersSubject.next({ ...this.filters, ...changes });
  }

  private toRow(t: Transaction): TransactionRow {
    return {
      id: t.id,
      dateLabel: formatDayMonth(t.date),
      description: t.description,
      category: t.category,
      color: this.dataService.getTransactionColor(t),
      letter: t.category.charAt(0).toUpperCase(),
      isIncome: t.type === 'income',
      sign: amountSign(t.type),
      amount: t.amount
    };
  }

  private optionLabel<T>(options: DropdownOption<T>[], value: T): string {
    const option = options.filter(o => o.value === value)[0];
    return option ? option.label : '';
  }
}
