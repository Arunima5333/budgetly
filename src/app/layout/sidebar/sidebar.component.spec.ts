import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CURRENCY_STORAGE_KEY, CurrencyService } from '../../core/services/currency.service';
import { SidebarComponent } from './sidebar.component';

// Provided globally by bootstrap.bundle.min.js (karma loads the angular.json scripts).
declare const bootstrap: any;

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SidebarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.removeItem(CURRENCY_STORAGE_KEY));

  it('shows the caption under the Currency row only for converted currencies, and describes the toggle with it', () => {
    const el: HTMLElement = fixture.nativeElement;
    const select = el.querySelector('#currencyToggle');
    expect(el.querySelector('.currency-caption')).toBeNull();
    expect(select.hasAttribute('aria-describedby')).toBe(false);
    (TestBed.get(CurrencyService) as CurrencyService).setCurrency('EUR');
    fixture.detectChanges();
    expect(el.querySelector('.currency-caption').textContent.trim()).toBe('Approximate exchange rates');
    expect(select.getAttribute('aria-describedby')).toBe('currencyCaption');
    (TestBed.get(CurrencyService) as CurrencyService).setCurrency('INR');
    fixture.detectChanges();
    expect(el.querySelector('.currency-caption')).toBeNull();
    expect(select.hasAttribute('aria-describedby')).toBe(false);
  });

  /** The outer region (sidebar root) and the one inside the offcanvas menu. */
  const regions = (el: HTMLElement) => ({
    outer: Array.prototype.filter.call(el.querySelectorAll('[role="status"][aria-live="polite"]'),
      (r: Element) => !r.closest('aside'))[0] as HTMLElement,
    inner: el.querySelector('aside [role="status"][aria-live="polite"]') as HTMLElement
  });
  const text = (r: HTMLElement) => r.textContent.trim();
  /** What Bootstrap does when the phone menu opens / closes as a modal. */
  const openMenu = (el: HTMLElement) => {
    const aside = el.querySelector('aside');
    aside.setAttribute('aria-modal', 'true');
    aside.dispatchEvent(new Event('shown.bs.offcanvas'));
  };
  const closeMenu = (el: HTMLElement) => {
    const aside = el.querySelector('aside');
    aside.removeAttribute('aria-modal');
    aside.dispatchEvent(new Event('hidden.bs.offcanvas'));
  };

  it('is silent on initial load', () => {
    const r = regions(fixture.nativeElement);
    expect(r.outer.getAttribute('aria-atomic')).toBe('true');
    expect(r.inner.getAttribute('aria-atomic')).toBe('true');
    expect(text(r.outer)).toBe('');
    expect(text(r.inner)).toBe('');
  });

  it('menu closed (or desktop): announces only in the outer region, and again on a repeat change', fakeAsync(() => {
    const r = regions(fixture.nativeElement);
    component.setCurrency('USD');
    fixture.detectChanges();
    expect(text(r.outer)).toBe('');
    tick(100);
    fixture.detectChanges();
    expect(text(r.outer)).toBe('Currency changed to US dollar');
    expect(text(r.inner)).toBe('');
    component.setCurrency('JPY');
    tick(100);
    component.setCurrency('USD');
    fixture.detectChanges();
    expect(text(r.outer)).toBe('');
    tick(100);
    fixture.detectChanges();
    expect(text(r.outer)).toBe('Currency changed to US dollar');
    expect(text(r.inner)).toBe('');
  }));

  it('menu open as a modal: announces only in the in-menu region; after closing, back to the outer one', fakeAsync(() => {
    const el: HTMLElement = fixture.nativeElement;
    const r = regions(el);
    component.setCurrency('USD');
    tick(100);
    openMenu(el);
    component.setCurrency('EUR');
    fixture.detectChanges();
    expect(text(r.outer)).toBe('');
    tick(100);
    fixture.detectChanges();
    expect(text(r.inner)).toBe('Currency changed to Euro');
    expect(text(r.outer)).toBe('');
    component.setCurrency('GBP');
    tick(100);
    component.setCurrency('EUR');
    tick(100);
    fixture.detectChanges();
    expect(text(r.inner)).toBe('Currency changed to Euro');
    closeMenu(el);
    component.setCurrency('JPY');
    tick(100);
    fixture.detectChanges();
    expect(text(r.outer)).toBe('Currency changed to Japanese yen');
    expect(text(r.inner)).toBe('');
  }));

  it('starts silent when a stored currency is restored', () => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, 'EUR');
    const restored = TestBed.createComponent(SidebarComponent);
    restored.detectChanges();
    const r = regions(restored.nativeElement);
    expect(text(r.outer)).toBe('');
    expect(text(r.inner)).toBe('');
    restored.destroy();
  });

  it('clears the in-menu region when the menu closes, and cancels an announcement still on its way there', fakeAsync(() => {
    const el: HTMLElement = fixture.nativeElement;
    const r = regions(el);
    openMenu(el);
    component.setCurrency('USD');
    tick(100);
    fixture.detectChanges();
    expect(text(r.inner)).toBe('Currency changed to US dollar');
    closeMenu(el);
    fixture.detectChanges();
    expect(text(r.inner)).toBe('');
    openMenu(el);
    component.setCurrency('EUR');
    closeMenu(el);
    tick(100);
    fixture.detectChanges();
    expect(text(r.inner)).toBe('');
    expect(text(r.outer)).toBe('');
  }));

  it('keeps the outer region when the menu closes', fakeAsync(() => {
    const el: HTMLElement = fixture.nativeElement;
    const r = regions(el);
    component.setCurrency('GBP');
    tick(100);
    openMenu(el);
    closeMenu(el);
    fixture.detectChanges();
    expect(text(r.outer)).toBe('Currency changed to British pound');
  }));

  it('renders the currency control as a dropdown: no select, no tooltip, no hidden rates note', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('select').length).toBe(0);
    expect(el.querySelector('[data-bs-toggle="tooltip"]')).toBeNull();
    expect(el.querySelector('#currencyRatesNote')).toBeNull();
    const toggle = el.querySelector('#currencyToggle');
    expect(toggle.getAttribute('data-bs-toggle')).toBe('dropdown');
    expect(toggle.getAttribute('aria-haspopup')).toBe('listbox');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-labelledby')).toBe('currencyLabel currencyToggle');
    expect(el.querySelector('#currencyLabel').textContent.trim()).toBe('Currency');
    expect(toggle.closest('.dropup')).not.toBeNull();
  });

  it('exposes the list as a listbox of five options, the selected one aria-selected (no aria-current)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const list = el.querySelector('.currency-menu');
    expect(list.getAttribute('role')).toBe('listbox');
    expect(list.getAttribute('aria-labelledby')).toBe('currencyLabel');
    const items = Array.prototype.slice.call(list.querySelectorAll('.dropdown-item')) as HTMLElement[];
    expect(items.map(i => i.textContent.trim())).toEqual(['₹ INR', '$ USD', '€ EUR', '£ GBP', '¥ JPY']);
    expect(items.every(i => i.getAttribute('role') === 'option')).toBe(true);
    expect(items.every(i => i.getAttribute('tabindex') === '-1')).toBe(true);
    expect(items.map(i => i.getAttribute('aria-selected'))).toEqual(['true', 'false', 'false', 'false', 'false']);
    expect(items.filter(i => i.classList.contains('active')).map(i => i.textContent.trim())).toEqual(['₹ INR']);
    expect(list.querySelectorAll('[aria-current]').length).toBe(0);
    expect(Array.prototype.every.call(list.querySelectorAll('li'), (li: Element) => li.getAttribute('role') === 'presentation'))
      .toBe(true);
  });

  it('shows only the selected currency in the toggle (no hidden copies)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const toggle = el.querySelector('#currencyToggle');
    expect(toggle.children.length).toBe(0);
    expect(toggle.textContent.trim()).toBe('₹ INR');
    (TestBed.get(CurrencyService) as CurrencyService).setCurrency('GBP');
    fixture.detectChanges();
    expect(toggle.textContent.trim()).toBe('£ GBP');
  });

  it('closes the list when the phone menu starts opening or closing, and keeps it closed while it slides', () => {
    const el: HTMLElement = fixture.nativeElement;
    const aside = el.querySelector('aside');
    const toggle = el.querySelector('#currencyToggle');
    const list = el.querySelector('.currency-menu');
    const dropdown = bootstrap.Dropdown.getInstance(toggle);
    dropdown.show();
    expect(list.classList.contains('show')).toBe(true);
    aside.dispatchEvent(new Event('show.bs.offcanvas'));
    expect(list.classList.contains('show')).toBe(false);
    dropdown.show();
    expect(list.classList.contains('show')).toBe(false);
    aside.dispatchEvent(new Event('shown.bs.offcanvas'));
    dropdown.show();
    expect(list.classList.contains('show')).toBe(true);
    aside.dispatchEvent(new Event('hide.bs.offcanvas'));
    expect(list.classList.contains('show')).toBe(false);
    dropdown.show();
    expect(list.classList.contains('show')).toBe(false);
    aside.dispatchEvent(new Event('hidden.bs.offcanvas'));
    dropdown.show();
    expect(list.classList.contains('show')).toBe(true);
    dropdown.hide();
  });

  it('picking an item updates the service, the active item and the visible toggle text, and refocuses the toggle', fakeAsync(() => {
    const el: HTMLElement = fixture.nativeElement;
    const currency: CurrencyService = TestBed.get(CurrencyService);
    const usd = Array.prototype.filter.call(el.querySelectorAll('.currency-menu .dropdown-item'),
      (i: HTMLElement) => i.textContent.trim() === '$ USD')[0] as HTMLElement;
    // (Karma's window is below lg, where the closed offcanvas can't take focus, so check the call.)
    const focusSpy = spyOn(el.querySelector('#currencyToggle') as HTMLElement, 'focus');
    usd.click();
    fixture.detectChanges();
    expect(currency.currency).toBe('USD');
    expect(localStorage.getItem(CURRENCY_STORAGE_KEY)).toBe('USD');
    expect(usd.classList.contains('active')).toBe(true);
    expect(usd.getAttribute('aria-selected')).toBe('true');
    expect(el.querySelector('#currencyToggle').textContent.trim()).toBe('$ USD');
    expect(focusSpy).toHaveBeenCalled();
    tick(100);
    fixture.detectChanges();
    expect(text(regions(el).outer)).toBe('Currency changed to US dollar');
  }));

  it('picking the already selected currency changes and announces nothing', fakeAsync(() => {
    const el: HTMLElement = fixture.nativeElement;
    const inr = el.querySelector('.currency-menu .dropdown-item.active') as HTMLElement;
    inr.click();
    tick(100);
    fixture.detectChanges();
    expect(localStorage.getItem(CURRENCY_STORAGE_KEY)).toBeNull();
    expect(text(regions(el).outer)).toBe('');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the brand and the four page links', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Budgetly');
    const links = Array.prototype.map.call(el.querySelectorAll('a.sidebar-link'), (a: HTMLElement) => a.textContent.trim());
    expect(links.join(',')).toContain('Overview');
    expect(links.join(',')).toContain('Reports');
  });
});
