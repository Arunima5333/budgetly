import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';

import { Transaction } from '../../../core/models/transaction.model';
import { DataService } from '../../../core/services/data.service';
import { formatDayMonth } from '../../../core/utils/date-format';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

let nextId = 0;

/**
 * Confirm dialog for deleting one transaction. Place `<app-delete-transaction-modal #deleteModal>`
 * in a template and call `deleteModal.open(transaction)`. Esc and backdrop clicks count as Cancel.
 */
@Component({
  selector: 'app-delete-transaction-modal',
  templateUrl: './delete-transaction-modal.component.html',
  styleUrls: ['./delete-transaction-modal.component.css']
})
export class DeleteTransactionModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalEl') modalEl: ElementRef;
  @ViewChild('cancelButton') cancelButton: ElementRef;

  /** Emitted after the dialog has closed following a successful delete (the trigger row is gone). */
  @Output() deleted = new EventEmitter<Transaction>();

  /**
   * Emitted after the dialog has closed without deleting. Focus has already been returned to the
   * element that was focused when it opened, if that element still exists.
   */
  @Output() cancelled = new EventEmitter<Transaction>();

  /** Unique per instance so ids never clash if the dialog is used twice on a page. */
  private readonly uid = 'delete-txn-' + (++nextId);

  readonly ids = {
    title: this.uid + '-title',
    description: this.uid + '-description'
  };

  transaction: Transaction | null = null;
  dateLabel = '';

  private modal: any;
  private isShown = false;
  private wasDeleted = false;
  private returnFocusTo: HTMLElement | null = null;

  private readonly onShown = () => {
    this.isShown = true;
    // Safe default for a destructive confirm.
    if (this.cancelButton) {
      this.cancelButton.nativeElement.focus();
    }
  }

  private readonly onHidden = () => {
    this.isShown = false;
    const transaction = this.transaction;
    if (this.wasDeleted) {
      this.deleted.emit(transaction);
      return;
    }
    // Opened programmatically, so Bootstrap doesn't restore focus itself.
    if (this.returnFocusTo && document.body.contains(this.returnFocusTo)) {
      this.returnFocusTo.focus();
    }
    this.cancelled.emit(transaction);
  }

  constructor(private dataService: DataService) { }

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

  open(transaction: Transaction) {
    this.transaction = transaction;
    this.dateLabel = formatDayMonth(transaction.date);
    this.wasDeleted = false;
    const active = document.activeElement as HTMLElement;
    this.returnFocusTo = active && active !== document.body ? active : null;
    if (this.modal) {
      this.modal.show();
    }
  }

  confirmDelete() {
    if (!this.transaction) {
      return;
    }
    this.wasDeleted = this.dataService.deleteTransaction(this.transaction.id);
    if (this.modal) {
      this.modal.hide();
    }
  }
}
