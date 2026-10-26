import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CURRENCY_STORAGE_KEY, CurrencyService } from '../../core/services/currency.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { OverviewComponent } from './overview.component';

/** Shallow render: child components are not declared (NO_ERRORS_SCHEMA); the real services run on localStorage. */
describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OverviewComponent, MoneyPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.removeItem(CURRENCY_STORAGE_KEY));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the approximate-rates pill only for converted currencies, updating live', () => {
    const el: HTMLElement = fixture.nativeElement;
    const currency: CurrencyService = TestBed.get(CurrencyService);
    expect(el.querySelector('.rate-note')).toBeNull();
    currency.setCurrency('USD');
    fixture.detectChanges();
    expect(el.querySelector('.rate-note').textContent.trim()).toBe('Amounts shown in $ USD at approximate rates');
    currency.setCurrency('JPY');
    fixture.detectChanges();
    expect(el.querySelector('.rate-note').textContent.trim()).toBe('Amounts shown in ¥ JPY at approximate rates');
    currency.setCurrency('INR');
    fixture.detectChanges();
    expect(el.querySelector('.rate-note-row')).toBeNull();
  });
});
