import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoryBudget } from '../../core/models/category-budget.model';
import { Category } from '../../core/models/category.model';
import { AlertService } from '../../core/services/alert.service';
import { CurrencyService } from '../../core/services/currency.service';
import { CATEGORY_NAME_MAX_LENGTH, DataService } from '../../core/services/data.service';
import { TodayService } from '../../core/services/today.service';
import { budgetHint, BudgetHint } from '../../core/utils/budget-hint';
import { adjustStatusForCurrency, needsAttention, toCategoryBudget } from '../../core/utils/category-budgets';
import { formatMonthYear } from '../../core/utils/date-format';
import { CurrencyCode, getCurrency, inputToInr, inrToInputValue } from '../../core/utils/money';
import { amountDecimalsIn, amountErrorText, positiveAmountIn } from '../../core/utils/validators';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

/** Everything the Budgets template needs, computed once per change. */
interface BudgetsView {
  /** Sum of all expense category limits. */
  totalBudget: number;
  /** Long month name only, e.g. 'October'. */
  monthName: string;
  /** Budget as a whole % of the month's income, or null when the month has no income. */
  incomePercent: number | null;
  /** Close / at-limit / over categories, most urgent first. */
  attention: CategoryBudget[];
  /** Every expense category for the selected month, in category order (category cards). */
  budgets: CategoryBudget[];
  /** Current month: "+ Add category" is shown. Past months are view only (editing stays allowed). */
  canAddCategory: boolean;
  /** e.g. 'September 2026' (past-month subtitle). */
  monthYear: string;
  /** Whether the selected month has any transactions (income or expense). */
  hasTransactions: boolean;
  /** Current month with no transactions yet: show the carried-over limits instead of progress. */
  isNewMonth: boolean;
  /** Expense categories by monthly limit, highest first (ties keep category order). New-month list. */
  limits: Category[];
  /** Long name of the month before the selected one, e.g. 'October' (January -> December). */
  previousMonthName: string;
}

interface ColorOption {
  name: string;
  value: string;
}

/** Colours offered for a new category; the first (Teal) is the default. */
const CATEGORY_COLORS: ColorOption[] = [
  { name: 'Teal', value: '#2a9d8f' },
  { name: 'Blue', value: '#3e93db' },
  { name: 'Indigo', value: '#5b6cf0' },
  { name: 'Purple', value: '#8a6fdf' },
  { name: 'Pink', value: '#c2557a' },
  { name: 'Orange', value: '#e0812f' },
  { name: 'Gold', value: '#c9a227' },
  { name: 'Slate', value: '#6b7280' }
];

/** Name must have text after trimming and be at most 24 characters once trimmed. */
function categoryName(control: AbstractControl): ValidationErrors | null {
  const name = (control.value || '').trim();
  if (!name) {
    return { required: true };
  }
  return name.length > CATEGORY_NAME_MAX_LENGTH ? { maxlength: true } : null;
}

let nextId = 0;

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('categoryModalEl') categoryModalEl: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('addCategoryButton') addCategoryButton: ElementRef;
  @ViewChild('categoriesTitle') categoriesTitle: ElementRef;
  @ViewChild('deleteCategoryModalEl') deleteCategoryModalEl: ElementRef;
  @ViewChild('deleteCancelButton') deleteCancelButton: ElementRef;

  view$: Observable<BudgetsView>;

  readonly colors = CATEGORY_COLORS;
  readonly nameMaxLength = CATEGORY_NAME_MAX_LENGTH;

  /** Unique per instance so ids never clash. */
  private readonly uid = 'add-cat-' + (++nextId);

  readonly ids = {
    title: this.uid + '-title',
    name: this.uid + '-name',
    nameError: this.uid + '-name-error',
    limit: this.uid + '-limit',
    limitError: this.uid + '-limit-error',
    limitHint: this.uid + '-limit-hint',
    colorLabel: this.uid + '-color-label',
    color: this.uid + '-color-',
    deleteTitle: this.uid + '-delete-title',
    deleteDescription: this.uid + '-delete-description'
  };

  categoryForm: FormGroup;
  submitted = false;

  categoryMode: 'add' | 'edit' = 'add';
  /** Original (stored) name of the category being edited. */
  editingName: string | null = null;
  /** Stored colour when it is not one of the 8 swatches: shown as an extra, selected swatch for this edit. */
  extraSwatch: ColorOption | null = null;
  /** Currency the limit is typed in, fixed when the modal opens; limits are saved in rupees. */
  formCurrency: CurrencyCode;

  /** Selected month's income and the current total of all limits, for the limit hint. */
  private hintIncome = 0;
  /** Total of all limits; in edit mode it EXCLUDES the edited category's stored limit. */
  private hintCurrentTotal = 0;

  /** Edit mode: the category's real spending this month (paise) and its stored limit. */
  private editingSpentPaise = 0;
  private editingStoredLimit = 0;
  /** Edit mode: the value the limit field was prefilled with (in formCurrency), for round-trip-safe saves. */
  private prefilledLimit: number | null = null;
  /** Name after the last successful edit, to find its card's pencil again if it re-rendered. */
  private lastSavedName: string | null = null;
  /** Set after a successful add: the form is reset once the modal has faded out. */
  private resetWhenHidden = false;

  private modal: any;
  private isShown = false;
  private returnFocusTo: HTMLElement | null = null;
  /** A valid category save has started: repeat clicks/Enter are ignored until the modal opens again. */
  private saving = false;
  /** Delete category confirmed: repeat clicks are ignored until the dialog opens again. */
  private deleting = false;

  /** Category shown in the "Delete this category?" dialog. */
  deletingCategory: Category | null = null;
  /** Set by "Delete category" in the edit modal; handled once that modal has fully closed (see onHidden). */
  private pendingDeleteName: string | null = null;
  private deleteModal: any;
  private isDeleteShown = false;
  private categoryWasDeleted = false;
  private deleteReturnFocusTo: HTMLElement | null = null;

  private readonly onDeleteShown = () => {
    this.isDeleteShown = true;
    // Safe default for a destructive confirm.
    if (this.deleteCancelButton) {
      this.deleteCancelButton.nativeElement.focus();
    }
  }

  private readonly onDeleteHidden = () => {
    this.isDeleteShown = false;
    this.deleting = false;
    const name = this.deletingCategory ? this.deletingCategory.name : null;
    let target: HTMLElement | null = null;
    if (!this.categoryWasDeleted) {
      // Cancel / × / Esc: back to the card's pencil.
      target = this.deleteReturnFocusTo && document.body.contains(this.deleteReturnFocusTo)
        ? this.deleteReturnFocusTo
        : (name ? this.findPencil(name) : null);
    }
    // After a delete the card is gone: "+ Add category", or the Categories heading while it is disabled.
    target = target || this.addCategoryOrHeading();
    if (target) {
      target.focus();
    }
    this.categoryWasDeleted = false;
    this.deleteReturnFocusTo = null;
  }

  private readonly onShown = () => {
    this.isShown = true;
    this.focusName();
  }

  private readonly onHidden = () => {
    this.isShown = false;
    this.saving = false;
    if (this.resetWhenHidden) {
      this.resetWhenHidden = false;
      this.resetCategoryForm();
    }
    // Opened programmatically, so Bootstrap doesn't restore focus itself. After a rename the card
    // (and its pencil) re-renders, so look the pencil up again by the new name.
    let target: HTMLElement | null = this.returnFocusTo && document.body.contains(this.returnFocusTo)
      ? this.returnFocusTo
      : null;
    if (!target && this.lastSavedName) {
      target = this.findPencil(this.lastSavedName);
    }
    if (!target && this.addCategoryButton) {
      target = this.addCategoryButton.nativeElement;
    }
    if (target) {
      target.focus();
    }
    this.lastSavedName = null;
    if (this.pendingDeleteName) {
      const name = this.pendingDeleteName;
      this.pendingDeleteName = null;
      this.handleDeleteRequest(name);
    }
  }

  constructor(private dataService: DataService, private fb: FormBuilder, private host: ElementRef,
              private alertService: AlertService, private today: TodayService, private currencyService: CurrencyService) {
    this.formCurrency = this.currencyService.currency;
    // Income, spending and categories can change (transactions edited, categories added).
    this.view$ = combineLatest(
      this.dataService.selectedMonth$,
      this.dataService.dataChanged$,
      this.currencyService.currency$
    ).pipe(
      map(([selected, , currency]) => {
        const summary = this.dataService.getMonthSummary(selected.year, selected.month);
        // Overspends that show as zero in the selected currency read 'At limit' (cards, list, Needs attention).
        const budgets = this.dataService.getCategoryBudgets(selected.year, selected.month)
          .map(b => adjustStatusForCurrency(b, currency));
        const isCurrent = this.today.isCurrentMonth(selected);
        const hasTransactions = this.dataService.getTransactionsForMonth(selected.year, selected.month).length > 0;
        return {
          totalBudget: summary.totalBudget,
          monthName: new Date(selected.year, selected.month - 1, 1).toLocaleDateString('en-US', { month: 'long' }),
          incomePercent: summary.income > 0 ? Math.round(summary.totalBudget / summary.income * 100) : null,
          attention: needsAttention(budgets),
          budgets,
          canAddCategory: isCurrent,
          monthYear: formatMonthYear(selected.year, selected.month),
          hasTransactions,
          isNewMonth: isCurrent && !hasTransactions,
          limits: this.sortByLimit(this.dataService.getCategories()),
          // Month 0 rolls back to December of the previous year.
          previousMonthName: new Date(selected.year, selected.month - 2, 1).toLocaleDateString('en-US', { month: 'long' })
        };
      })
    );

    this.categoryForm = this.fb.group({
      name: ['', categoryName],
      limit: [null, [Validators.required, positiveAmountIn(() => this.formCurrency), amountDecimalsIn(() => this.formCurrency)]],
      color: [CATEGORY_COLORS[0].value]
    });
  }

  /** Prefix of the limit field, e.g. '$': the limit is typed in this currency and saved in rupees. */
  get currencySymbol(): string {
    return getCurrency(this.formCurrency).symbol;
  }

  /** 1 for whole-unit currencies (JPY), else 0.01. */
  get limitStep(): string {
    return getCurrency(this.formCurrency).decimals === 0 && this.formCurrency !== 'INR' ? '1' : '0.01';
  }

  /** Example limit in the form's currency, e.g. '2,000' or '25.00'. */
  get limitPlaceholder(): string {
    return getCurrency(this.formCurrency).limitPlaceholder;
  }

  /** Trimmed name as typed. */
  get trimmedName(): string {
    return (this.categoryForm.get('name').value || '').trim();
  }

  /** Stored name of an existing category with the same name (case-insensitive), shown live. */
  get duplicateOf(): string | null {
    // In edit mode the category's own current name (any case) is not a clash.
    return this.dataService.findCategoryName(this.trimmedName, this.categoryMode === 'edit' ? this.editingName : undefined);
  }

  get nameErrorText(): string | null {
    const duplicate = this.duplicateOf;
    if (duplicate) {
      return 'You already have a category called ' + duplicate + '.';
    }
    const control = this.categoryForm.get('name');
    if (!this.submitted || control.valid) {
      return null;
    }
    return control.hasError('maxlength')
      ? 'Keep the name to ' + CATEGORY_NAME_MAX_LENGTH + ' characters or fewer.'
      : 'Enter a category name.';
  }

  /** 'Enter a limit greater than 0.', or the decimals rule ('Use at most 2 decimal places.' / whole yen). */
  get limitErrorText(): string {
    return amountErrorText(this.categoryForm.get('limit'), 'limit') || '';
  }

  get limitInvalid(): boolean {
    return this.submitted && this.categoryForm.get('limit').invalid;
  }

  /**
   * The typed limit in rupees (converted from formCurrency, rounded to paise), or null while empty or invalid.
   * An untouched edit gives back the stored limit exactly. The hint and preview compare in rupees.
   */
  get validLimit(): number | null {
    const control = this.categoryForm.get('limit');
    return control.valid
      ? inputToInr(control.value, this.formCurrency, this.prefilledLimit, this.categoryMode === 'edit' ? this.editingStoredLimit : null)
      : null;
  }

  get limitHint(): BudgetHint {
    // Edit mode with nothing valid typed: the stored limit still counts.
    const limit = this.validLimit !== null ? this.validLimit
      : (this.categoryMode === 'edit' ? this.editingStoredLimit : null);
    return budgetHint(this.hintIncome, this.hintCurrentTotal, limit);
  }

  /**
   * Live preview row: real spending in edit mode (0 when adding), the typed limit (or the stored
   * limit while the field is empty/invalid in edit mode, 0 in add mode), status via budgetStatus.
   */
  get preview(): CategoryBudget {
    const limit = this.validLimit !== null ? this.validLimit
      : (this.categoryMode === 'edit' ? this.editingStoredLimit : 0);
    const spentPaise = this.categoryMode === 'edit' ? this.editingSpentPaise : 0;
    return adjustStatusForCurrency(
      toCategoryBudget({ name: this.trimmedName, color: this.selectedColor, monthlyLimit: limit }, spentPaise), this.formCurrency);
  }

  /** The 8 swatches, plus the stored colour when editing a category whose colour is not one of them. */
  get swatches(): ColorOption[] {
    return this.extraSwatch ? CATEGORY_COLORS.concat([this.extraSwatch]) : CATEGORY_COLORS;
  }

  /** Error (when shown) and hint (unless hidden) ids for the limit input, or null. */
  get limitDescribedBy(): string | null {
    const ids: string[] = [];
    if (this.limitInvalid) {
      ids.push(this.ids.limitError);
    }
    if (this.limitHint.kind !== 'hidden') {
      ids.push(this.ids.limitHint);
    }
    return ids.length ? ids.join(' ') : null;
  }

  get selectedColor(): string {
    return this.categoryForm.get('color').value;
  }

  ngAfterViewInit() {
    if (typeof bootstrap === 'undefined') {
      return;
    }
    const element = this.categoryModalEl.nativeElement;
    this.modal = new bootstrap.Modal(element);
    element.addEventListener('shown.bs.modal', this.onShown);
    element.addEventListener('hidden.bs.modal', this.onHidden);

    const deleteElement = this.deleteCategoryModalEl.nativeElement;
    this.deleteModal = new bootstrap.Modal(deleteElement);
    deleteElement.addEventListener('shown.bs.modal', this.onDeleteShown);
    deleteElement.addEventListener('hidden.bs.modal', this.onDeleteHidden);
  }

  ngOnDestroy() {
    if (!this.modal) {
      return;
    }
    const element = this.categoryModalEl.nativeElement;
    element.removeEventListener('shown.bs.modal', this.onShown);
    element.removeEventListener('hidden.bs.modal', this.onHidden);
    this.modal.dispose();

    const deleteElement = this.deleteCategoryModalEl.nativeElement;
    deleteElement.removeEventListener('shown.bs.modal', this.onDeleteShown);
    deleteElement.removeEventListener('hidden.bs.modal', this.onDeleteHidden);
    this.deleteModal.dispose();

    if (this.isShown || this.isDeleteShown) {
      // Destroyed while open (e.g. browser back): undo what Bootstrap did to <body>.
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }
  }

  trackByName(index: number, budget: CategoryBudget): string {
    return budget.name;
  }

  trackByCategoryName(index: number, category: Category): string {
    return category.name;
  }

  /** Rupees left in the budget (0 when at or over the limit; over budget uses budget.overBy). */
  leftAmount(budget: CategoryBudget): number {
    return Math.max(0, Math.round((budget.limit - budget.spent) * 100) / 100);
  }

  /** Card pencil (desktop grid and mobile list): opens the modal in edit mode for this category. */
  editCategory(name: string) {
    const category = this.dataService.getCategories().filter(c => c.name === name)[0];
    if (!category) {
      return;
    }
    this.rememberFocus();
    this.categoryMode = 'edit';
    this.editingName = category.name;
    this.submitted = false;
    const color = category.color.toLowerCase();
    this.extraSwatch = CATEGORY_COLORS.some(c => c.value === color) ? null : { name: 'Current colour', value: color };
    this.formCurrency = this.currencyService.currency;
    this.prefilledLimit = inrToInputValue(category.monthlyLimit, this.formCurrency);
    this.categoryForm.reset({ name: category.name, limit: this.prefilledLimit, color });

    const selected = this.dataService.getSelectedMonth();
    const summary = this.dataService.getMonthSummary(selected.year, selected.month);
    const budget = this.dataService.getCategoryBudgets(selected.year, selected.month).filter(b => b.name === category.name)[0];
    this.hintIncome = summary.income;
    this.hintCurrentTotal = Math.round((summary.totalBudget - category.monthlyLimit) * 100) / 100;
    this.editingStoredLimit = category.monthlyLimit;
    this.editingSpentPaise = budget ? Math.round(budget.spent * 100) : 0;
    this.show();
  }

  /** "+ Add category": opens the modal with a fresh form. */
  openAddCategory() {
    this.rememberFocus();
    this.resetCategoryForm();
    this.show();
  }

  closeAddCategory() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  saveCategory() {
    if (this.saving) {
      return;
    }
    this.submitted = true;
    if (this.categoryForm.invalid || this.duplicateOf) {
      return;
    }
    this.saving = true;
    const input = {
      name: this.trimmedName,
      monthlyLimit: this.validLimit,
      color: this.selectedColor
    };

    if (this.categoryMode === 'edit') {
      // Saved, or the category no longer exists (null): either way close; no success view.
      const updated = this.dataService.updateCategory(this.editingName, input);
      this.lastSavedName = updated ? updated.name : null;
      this.closeAddCategory();
      if (updated) {
        this.alertService.show('Category updated');
      }
      return;
    }

    const category = this.dataService.addCategory(input);
    if (!category) {
      return;
    }
    // Add mode: close straight away (form reset once hidden), then the shared alert.
    this.resetWhenHidden = true;
    this.closeAddCategory();
    this.alertService.show('Category added');
  }

  /** Edit mode "Delete category": closes the edit modal, then checks and confirms (see onHidden). */
  requestDeleteCategory() {
    const name = this.editingName;
    if (!name) {
      return;
    }
    if (!this.modal) {
      this.handleDeleteRequest(name);
      return;
    }
    this.pendingDeleteName = name;
    this.closeAddCategory();
  }

  /** "Delete" in the confirm dialog. Refused (e.g. transactions were added meanwhile): just closes. */
  confirmDeleteCategory() {
    if (!this.deletingCategory || this.deleting) {
      return;
    }
    this.deleting = true;
    this.categoryWasDeleted = this.dataService.deleteCategory(this.deletingCategory.name);
    if (this.deleteModal) {
      this.deleteModal.hide();
    }
    if (this.categoryWasDeleted) {
      this.alertService.show('Category deleted');
    }
  }

  /**
   * Categories used by any transaction (any month) can't be deleted: say so in the danger alert
   * (focus is already back on the card's pencil). Otherwise ask for confirmation.
   */
  private handleDeleteRequest(name: string) {
    const category = this.dataService.getCategories().filter(c => c.name === name)[0];
    if (!category) {
      return;
    }
    if (this.dataService.categoryHasTransactions(name)) {
      this.alertService.show('This category has transactions, so it can\'t be deleted.', 'danger');
      return;
    }
    this.deletingCategory = category;
    this.categoryWasDeleted = false;
    this.deleting = false;
    const active = document.activeElement as HTMLElement;
    this.deleteReturnFocusTo = active && active !== document.body ? active : null;
    if (this.deleteModal) {
      this.deleteModal.show();
    }
  }

  /** The visible pencil of a category's card (desktop grid or mobile list), or null. */
  private findPencil(name: string): HTMLElement | null {
    // Compared, not put in a selector: names may contain quotes or backslashes.
    const pencils = this.host.nativeElement.querySelectorAll('[data-category]');
    return Array.prototype.filter.call(pencils, (el: HTMLElement) =>
      el.getAttribute('data-category') === name && el.offsetParent !== null)[0] || null;
  }

  /** "+ Add category", or the Categories heading when that button isn't shown (past months); null if neither is. */
  private addCategoryOrHeading(): HTMLElement | null {
    if (this.addCategoryButton) {
      return this.addCategoryButton.nativeElement;
    }
    return this.categoriesTitle ? this.categoriesTitle.nativeElement : null;
  }

  /** Highest monthly limit first; equal limits keep the category order. */
  private sortByLimit(categories: Category[]): Category[] {
    return categories
      .map((category, index) => ({ category, index }))
      .sort((a, b) => b.category.monthlyLimit - a.category.monthlyLimit || a.index - b.index)
      .map(entry => entry.category);
  }

  private rememberFocus() {
    const active = document.activeElement as HTMLElement;
    this.returnFocusTo = active && active !== document.body ? active : null;
  }

  private show() {
    this.saving = false;
    if (this.modal) {
      this.modal.show();
    }
  }

  /** Add mode with a fresh form. */
  private resetCategoryForm() {
    this.categoryMode = 'add';
    this.editingName = null;
    this.extraSwatch = null;
    this.editingSpentPaise = 0;
    this.editingStoredLimit = 0;
    this.prefilledLimit = null;
    this.formCurrency = this.currencyService.currency;
    this.submitted = false;
    this.categoryForm.reset({ name: '', limit: null, color: CATEGORY_COLORS[0].value });
    // Hint inputs: the selected month's income and the current total (it grows after each add).
    const selected = this.dataService.getSelectedMonth();
    const summary = this.dataService.getMonthSummary(selected.year, selected.month);
    this.hintIncome = summary.income;
    this.hintCurrentTotal = summary.totalBudget;
  }

  private focusName() {
    if (this.nameInput) {
      this.nameInput.nativeElement.focus();
    }
  }
}
