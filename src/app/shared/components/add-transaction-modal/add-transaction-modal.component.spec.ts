import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertService } from '../../../core/services/alert.service';
import { DataService } from '../../../core/services/data.service';
import { MoneyPipe } from '../../pipes/money.pipe';
import { AddTransactionModalComponent } from './add-transaction-modal.component';

describe('AddTransactionModalComponent save guard', () => {
  let component: AddTransactionModalComponent;
  let fixture: ComponentFixture<AddTransactionModalComponent>;
  let addSpy: jasmine.Spy;
  let alertSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddTransactionModalComponent, MoneyPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionModalComponent);
    component = fixture.componentInstance;
    // No fade: Bootstrap shows/hides the modal (and its backdrop) synchronously, so no transition callback
    // can run after a test has finished and its DOM is gone. Removed BEFORE the first change detection:
    // ngAfterViewInit creates the Bootstrap Modal, which fixes its backdrop's animation at construction.
    fixture.nativeElement.querySelector('.modal').classList.remove('fade');
    fixture.detectChanges();
    addSpy = spyOn(TestBed.get(DataService), 'addTransaction').and.returnValue(null);
    alertSpy = spyOn(TestBed.get(AlertService), 'show');
    component.open();
  });

  afterEach(() => {
    // Disposes the Bootstrap modal (ngOnDestroy), then clears anything it left on <body>.
    fixture.destroy();
    Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop'), (el: Element) => el.parentNode.removeChild(el));
    document.body.classList.remove('modal-open');
    document.body.removeAttribute('style');
  });

  it('saves and alerts once when Save is clicked twice', () => {
    component.form.patchValue({ amount: 120, category: 'Food' });
    component.save();
    component.save();
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith('Transaction added');
  });

  it('lets the user save after fixing a validation error', () => {
    component.save();
    expect(addSpy).not.toHaveBeenCalled();
    component.form.patchValue({ amount: 50, category: 'Food' });
    component.save();
    expect(addSpy).toHaveBeenCalledTimes(1);
  });

  it('allows a new save after the modal is opened again', () => {
    component.form.patchValue({ amount: 10, category: 'Food' });
    component.save();
    component.open();
    component.form.patchValue({ amount: 20, category: 'Food' });
    component.save();
    expect(addSpy).toHaveBeenCalledTimes(2);
  });
});
