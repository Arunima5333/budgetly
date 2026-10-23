import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Transaction, TransactionType } from '../../../core/models/transaction.model';
import { AlertService } from '../../../core/services/alert.service';
import { DataService } from '../../../core/services/data.service';
import { TodayService } from '../../../core/services/today.service';
import { positiveAmount } from '../../../core/utils/validators';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

interface CategoryOption {
  name: string;
  color: string;
}

let nextId = 0;

/**
 * Reusable add/edit transaction modal. Place `<app-add-transaction-modal #addTxn>` in a template,
 * then call `addTxn.open()` to add or `addTxn.openForEdit(transaction)` to edit.
 */
@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.css']
})
export class AddTransactionModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalEl') modalEl: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  /**
   * Edit mode "Delete transaction": emitted with the stored (unedited) transaction once this
   * modal has fully closed, so the host can open its own confirm dialog without stacked backdrops.
   */
  @Output() deleteRequested = new EventEmitter<Transaction>();

  /** Unique per instance so ids and labels never clash if the modal is used twice on a page. */
  private readonly uid = 'add-txn-' + (++nextId);

  readonly ids = {
    title: this.uid + '-title',
    amount: this.uid + '-amount',
    amountError: this.uid + '-amount-error',
    categoryLabel: this.uid + '-category-label',
    categoryError: this.uid + '-category-error',
    date: this.uid + '-date',
    dateError: this.uid + '-date-error',
    note: this.uid + '-note'
  };

  form: FormGroup;
  mode: 'add' | 'edit' = 'add';
  /** Id of the transaction being edited (edit mode only). */
  editingId: string | null = null;
  submitted = false;

  private expenseCategories: CategoryOption[];
  private readonly incomeCategories: CategoryOption[];
  private modal: any;
  private isShown = false;
  private typeSubscription: Subscription;
  /** Set only by deleteTransaction(), so ordinary closes never emit deleteRequested. */
  private pendingDelete: Transaction | null = null;
  /** Set after a successful add: the form is reset once the modal has faded out (no visible flicker). */
  private resetWhenHidden = false;
  /** Element focused when the modal opened (opened from code, so Bootstrap doesn't restore focus itself). */
  private returnFocusTo: HTMLElement | null = null;
  /**
   * Set once a valid save has started; further clicks/Enter are ignored until the modal is opened again,
   * so a double-click saves (and alerts) once. Validation failures never set it.
   */
  private busy = false;

  /**
   * Add and edit: the date must be in the current month, up to today (typed dates can bypass the
   * input's min/max). Editing only happens in the current month (past months are read-only).
   */
  private readonly dateInRange = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (!value) {
      return null;
    }
    return value < this.today.firstOfMonthIso() || value > this.today.todayIso() ? { outsideCurrentMonth: true } : null;
  }

  private readonly onShown = () => {
    this.isShown = true;
    this.focusAmount();
  }

  private readonly onHidden = () => {
    this.isShown = false;
    this.busy = false;
    if (this.resetWhenHidden) {
      this.resetWhenHidden = false;
      this.resetForm();
    }
    // Restore focus to the trigger (e.g. "+ Add transaction" or a row's pencil) if it still exists. When it has
    // gone (the first transaction of an empty month swaps the empty-state card for the normal layout), use the
    // page header's "+ Add transaction", else the month selector.
    if (this.returnFocusTo && document.body.contains(this.returnFocusTo)) {
      this.returnFocusTo.focus();
    } else {
      const fallback = this.visible('main header .btn-add') || this.visible('main .month-toggle');
      if (fallback) {
        fallback.focus();
      }
    }
    this.returnFocusTo = null;
    if (this.pendingDelete) {
      const transaction = this.pendingDelete;
      this.pendingDelete = null;
      this.deleteRequested.emit(transaction);
    }
  }

  constructor(private fb: FormBuilder, private dataService: DataService, private alertService: AlertService,
              private today: TodayService) {
    this.expenseCategories = this.readExpenseCategories();
    this.incomeCategories = this.dataService.getIncomeCategories().map(c => ({ name: c.name, color: c.color }));

    this.form = this.fb.group({
      type: ['expense'],
      amount: [null, [Validators.required, positiveAmount]],
      category: [null, Validators.required],
      date: [this.today.todayIso(), [Validators.required, this.dateInRange]],
      note: ['']
    });

    // Expense and income have different categories, so switching type clears the choice.
    this.typeSubscription = this.form.get('type').valueChanges.subscribe(() => {
      this.form.get('category').setValue(null);
    });
  }

  get type(): TransactionType {
    return this.form.get('type').value;
  }

  get selectedCategory(): string | null {
    return this.form.get('category').value;
  }

  get categories(): CategoryOption[] {
    return this.type === 'income' ? this.incomeCategories : this.expenseCategories;
  }

  /** Type toggle; switching type clears the category (see the valueChanges subscription). */
  setType(type: TransactionType) {
    if (this.type !== type) {
      this.form.get('type').setValue(type);
    }
  }

  selectCategory(name: string) {
    this.form.get('category').setValue(name);
  }

  get amountInvalid(): boolean {
    return this.submitted && this.form.get('amount').invalid;
  }

  get categoryInvalid(): boolean {
    return this.submitted && this.form.get('category').invalid;
  }

  get dateInvalid(): boolean {
    return this.submitted && this.form.get('date').invalid;
  }

  get dateErrorText(): string {
    return this.form.get('date').hasError('outsideCurrentMonth')
      ? 'Pick a date from this month, up to today.'
      : 'Pick a date.';
  }

  /** Date input limits in add AND edit mode: 1st of the current month … today (TodayService). */
  get dateMin(): string {
    return this.today.firstOfMonthIso();
  }

  get dateMax(): string {
    return this.today.todayIso();
  }

  ngAfterViewInit() {
    if (typeof bootstrap === 'undefined') {
      return;
    }
    const element = this.modalEl.nativeElement;
    this.modal = new bootstrap.Modal(element);
    element.addEventListener('shown.bs.modal', this.onShown);
    element.addEventListener('hidden.bs.modal', this.onHidden);
  }

  ngOnDestroy() {
    this.typeSubscription.unsubscribe();
    if (!this.modal) {
      return;
    }
    const element = this.modalEl.nativeElement;
    element.removeEventListener('shown.bs.modal', this.onShown);
    element.removeEventListener('hidden.bs.modal', this.onHidden);
    this.modal.dispose();
    if (this.isShown) {
      // Destroyed while open (e.g. browser back): undo what Bootstrap did to <body>.
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }
  }

  /** Opens the modal in add mode with a fresh form (kept for existing callers). */
  open() {
    this.openForAdd();
  }

  openForAdd() {
    this.expenseCategories = this.readExpenseCategories();
    this.mode = 'add';
    this.editingId = null;
    this.resetForm();
    this.show();
  }

  /** Opens the modal in edit mode, pre-filled from the transaction. */
  openForEdit(transaction: Transaction) {
    this.expenseCategories = this.readExpenseCategories();
    this.mode = 'edit';
    this.editingId = transaction.id;
    this.submitted = false;
    // emitEvent: false so the type subscription doesn't clear the category being set here.
    this.form.reset({
      type: transaction.type,
      amount: transaction.amount,
      category: transaction.category,
      date: transaction.date,
      // The description is the note, or the category name when no note was given.
      note: transaction.description === transaction.category ? '' : transaction.description
    }, { emitEvent: false });
    this.show();
  }

  /** Edit-mode "Delete transaction": closes this modal, then emits deleteRequested (see onHidden). */
  deleteTransaction() {
    const transaction = this.editingId ? this.dataService.getTransactionById(this.editingId) : null;
    if (!transaction) {
      this.close();
      return;
    }
    if (!this.modal) {
      this.deleteRequested.emit(transaction);
      return;
    }
    this.pendingDelete = transaction;
    this.close();
  }

  close() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  save() {
    if (this.busy) {
      return;
    }
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.busy = true;
    const value = this.form.value;
    const input = {
      type: value.type as TransactionType,
      amount: Number(value.amount),
      category: value.category,
      date: value.date,
      note: value.note
    };

    if (this.mode === 'edit') {
      // Close whether it saved or the transaction no longer exists (null): nothing is left to edit.
      const updated = this.dataService.updateTransaction(this.editingId, input);
      this.close();
      if (updated) {
        this.alertService.show('Transaction updated');
      }
      return;
    }

    // Add mode: save, close straight away (form reset once hidden), then the shared alert.
    this.dataService.addTransaction(input);
    this.resetWhenHidden = true;
    this.close();
    this.alertService.show('Transaction added');
  }

  /** Re-read on every open: users can add expense categories on the Budgets page. */
  private readExpenseCategories(): CategoryOption[] {
    return this.dataService.getCategories().map(c => ({ name: c.name, color: c.color }));
  }

  /** First visible element matching `selector` in the page, or null. */
  private visible(selector: string): HTMLElement | null {
    const matches = document.querySelectorAll(selector);
    return Array.prototype.filter.call(matches, (el: HTMLElement) => el.offsetParent !== null)[0] || null;
  }

  private show() {
    this.busy = false;
    const active = document.activeElement as HTMLElement;
    this.returnFocusTo = active && active !== document.body ? active : null;
    if (this.modal) {
      this.modal.show();
    }
  }

  private resetForm() {
    this.submitted = false;
    this.form.reset({
      type: 'expense',
      amount: null,
      category: null,
      date: this.today.todayIso(),
      note: ''
    });
  }

  private focusAmount() {
    if (this.amountInput) {
      this.amountInput.nativeElement.focus();
    }
  }
}
