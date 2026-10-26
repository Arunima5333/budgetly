import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AlertService } from '../../core/services/alert.service';
import { CurrencyService } from '../../core/services/currency.service';
import { CURRENCIES, CurrencyCode, CurrencyOption, DEFAULT_CURRENCY, getCurrency } from '../../core/utils/money';

// Provided globally by bootstrap.bundle.min.js (registered in angular.json).
declare const bootstrap: any;

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'budgetly.theme';

interface SidebarLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidebarMenu') sidebarMenu: ElementRef;
  @ViewChild('currencyDropdown') currencyDropdown: ElementRef;
  @ViewChild('currencyToggle') currencyToggle: ElementRef;
  @ViewChild('currencyMenu') currencyMenu: ElementRef;

  links: SidebarLink[] = [
    { path: '/overview', label: 'Overview', icon: 'bi-grid-1x2' },
    { path: '/transactions', label: 'Transactions', icon: 'bi-list-ul' },
    { path: '/budgets', label: 'Budgets', icon: 'bi-pie-chart' },
    { path: '/reports', label: 'Reports', icon: 'bi-bar-chart-line' }
  ];

  theme: Theme = 'light';

  readonly currencies = CURRENCIES;
  /**
   * Live-region texts: empty on load (a restored currency isn't announced), set only by a user change, and only
   * ever one of them: the in-menu region while the phone menu is open as a modal, otherwise the outer one.
   */
  currencyAnnouncement = '';
  menuAnnouncement = '';
  private announceTimer: any = null;
  /** The pending announcement (if any) is aimed at the in-menu region. */
  private announceInMenu = false;
  /** Phone/tablet menu open as a modal (shown.bs.offcanvas until hidden.bs.offcanvas); never true from lg up. */
  private menuOpen = false;
  /** Bootstrap Dropdown for the currency control. */
  private currencyDropdownInstance: any = null;
  /** The phone menu is sliding in or out (show/hide until shown/hidden): the currency list stays closed meanwhile. */
  private menuSliding = false;

  /**
   * Before the currency list opens: refuse while the phone menu is sliding (a fixed-positioned list inside the
   * moving, transformed offcanvas would appear offset). Cancelling Bootstrap's show event keeps it closed.
   */
  private readonly onCurrencyShow = (event: Event) => {
    if (this.menuSliding) {
      event.preventDefault();
    }
  }

  /** Closes the currency list without moving focus (the offcanvas manages focus while it slides). */
  private closeCurrencyList() {
    if (this.currencyDropdownInstance) {
      this.currencyDropdownInstance.hide();
    }
  }

  /** Once the currency list is shown: focus the selected currency. */
  private readonly onCurrencyShown = () => {
    const active = this.currencyMenu.nativeElement.querySelector('.dropdown-item.active') as HTMLElement;
    if (active) {
      active.focus();
    }
  }

  /**
   * Keys for the currency control, on window in the capture phase so they run before Bootstrap's document handlers
   * and the offcanvas' own Escape handler:
   * - Escape in the open list closes only the list (focus back on the toggle), never the phone menu;
   * - ArrowUp/ArrowDown on the closed toggle open the list on the selected currency (not the first/last item).
   * Arrow keys inside the open list are left to Bootstrap.
   */
  private readonly onWindowKeydown = (event: KeyboardEvent) => {
    const dropdown = this.currencyDropdownInstance;
    const target = event.target as Node;
    if (!dropdown || !this.currencyDropdown || !target || !this.currencyDropdown.nativeElement.contains(target)) {
      return;
    }
    const toggle: HTMLElement = this.currencyToggle.nativeElement;
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      dropdown.hide();
      toggle.focus();
    } else if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && !isOpen && target === toggle) {
      event.preventDefault();
      event.stopPropagation();
      dropdown.show();
    }
  }

  /** Phone/tablet menu opening: clear any alert (it would sit over the menu links) and hold new ones. */
  private readonly onMenuShow = () => {
    this.alertService.holdAlerts(true);
    this.alertService.dismiss();
    this.menuSliding = true;
    this.closeCurrencyList();
  }

  /** Menu starting to close: close the currency list at once, before the slide. */
  private readonly onMenuHide = () => {
    this.menuSliding = true;
    this.closeCurrencyList();
  }

  private readonly onMenuShown = () => {
    this.menuOpen = true;
    this.menuSliding = false;
  }

  /**
   * Menu closed: show the latest held alert, if any, and empty the in-menu live region (cancelling an
   * announcement still on its way there), so it never keeps the last currency message. The outer region is untouched.
   */
  private readonly onMenuHidden = () => {
    this.menuOpen = false;
    this.menuSliding = false;
    this.alertService.holdAlerts(false);
    if (this.announceInMenu) {
      clearTimeout(this.announceTimer);
      this.announceInMenu = false;
    }
    this.menuAnnouncement = '';
    this.closeCurrencyList();
  }

  get isDark(): boolean {
    return this.theme === 'dark';
  }

  get currency(): CurrencyCode {
    return this.currencyService.currency;
  }

  /** The selected currency's entry ('$ USD' on the toggle). */
  get selectedOption(): CurrencyOption {
    return getCurrency(this.currency);
  }

  /** Amounts are converted (any currency but the INR base): shows the caption under the Currency row. */
  get isConverted(): boolean {
    return this.currency !== DEFAULT_CURRENCY;
  }

  constructor(private alertService: AlertService, private currencyService: CurrencyService) { }

  ngOnInit() {
    // index.html sets the attribute before Angular boots (avoids a flash);
    // resolve it again here in case that script did not run.
    const current = document.documentElement.getAttribute('data-bs-theme');
    this.applyTheme(current === 'dark' || current === 'light' ? current : this.getPreferredTheme());
  }

  ngAfterViewInit() {
    // Offcanvas events only fire below lg (from lg up the sidebar is a static column).
    const menu: HTMLElement = this.sidebarMenu.nativeElement;
    menu.addEventListener('show.bs.offcanvas', this.onMenuShow);
    menu.addEventListener('shown.bs.offcanvas', this.onMenuShown);
    menu.addEventListener('hide.bs.offcanvas', this.onMenuHide);
    menu.addEventListener('hidden.bs.offcanvas', this.onMenuHidden);
    this.createCurrencyDropdown();
  }

  ngOnDestroy() {
    const menu: HTMLElement = this.sidebarMenu.nativeElement;
    menu.removeEventListener('show.bs.offcanvas', this.onMenuShow);
    menu.removeEventListener('shown.bs.offcanvas', this.onMenuShown);
    menu.removeEventListener('hide.bs.offcanvas', this.onMenuHide);
    menu.removeEventListener('hidden.bs.offcanvas', this.onMenuHidden);
    this.alertService.holdAlerts(false);
    clearTimeout(this.announceTimer);
    if (this.currencyDropdownInstance) {
      this.currencyToggle.nativeElement.removeEventListener('show.bs.dropdown', this.onCurrencyShow);
      this.currencyToggle.nativeElement.removeEventListener('shown.bs.dropdown', this.onCurrencyShown);
      window.removeEventListener('keydown', this.onWindowKeydown, true);
      this.currencyDropdownInstance.dispose();
      this.currencyDropdownInstance = null;
    }
  }

  toggleTheme() {
    this.applyTheme(this.isDark ? 'light' : 'dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, this.theme);
    } catch (e) {
      // Storage unavailable (private mode, blocked); the choice just won't persist.
    }
  }

  /** Amounts everywhere are shown converted to the new currency; stored amounts stay in rupees. */
  setCurrency(code: CurrencyCode) {
    if (code === this.currency) {
      return;
    }
    this.currencyService.setCurrency(code);
    this.announceCurrency();
  }

  /** A currency picked from the list: apply it, close the list and return focus to the toggle. */
  pickCurrency(code: CurrencyCode) {
    this.setCurrency(code);
    if (this.currencyDropdownInstance) {
      this.currencyDropdownInstance.hide();
    }
    if (this.currencyToggle) {
      this.currencyToggle.nativeElement.focus();
    }
  }

  /** Closes the offcanvas menu on mobile; no-op on desktop where it is not shown. */
  closeMenu() {
    if (typeof bootstrap === 'undefined' || !this.sidebarMenu) {
      return;
    }
    const instance = bootstrap.Offcanvas.getInstance(this.sidebarMenu.nativeElement);
    if (instance) {
      instance.hide();
    }
  }

  /**
   * 'Currency changed to US dollar'. Cleared first and set again a moment later, so every change is announced,
   * including going back to a currency announced before.
   */
  private announceCurrency() {
    this.currencyAnnouncement = '';
    this.menuAnnouncement = '';
    clearTimeout(this.announceTimer);
    // The aria-modal check keeps desktop (offcanvas-lg is never modal there) on the outer region.
    const inMenu = this.menuOpen && this.sidebarMenu.nativeElement.getAttribute('aria-modal') === 'true';
    const text = 'Currency changed to ' + getCurrency(this.currency).name;
    this.announceInMenu = inMenu;
    this.announceTimer = setTimeout(() => {
      this.announceInMenu = false;
      if (inMenu) {
        this.menuAnnouncement = text;
      } else {
        this.currencyAnnouncement = text;
      }
    }, 100);
  }

  /**
   * The currency list opens upward (dropup + dropdown-menu-end = 'top-end'). Popper's 'fixed' strategy lifts it out
   * of the sidebar/offcanvas scroll areas (no clipping); flip/shift keep it inside the viewport (8px margin), so on a
   * short landscape phone it may open downward or slide instead.
   */
  private createCurrencyDropdown() {
    if (typeof bootstrap === 'undefined' || !this.currencyToggle) {
      return;
    }
    const toggle: HTMLElement = this.currencyToggle.nativeElement;
    this.currencyDropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle, {
      popperConfig: (defaults: any) => ({
        ...defaults,
        strategy: 'fixed',
        modifiers: (defaults.modifiers || []).concat([
          { name: 'preventOverflow', options: { boundary: document.documentElement, rootBoundary: 'viewport', padding: 8, altAxis: true } },
          { name: 'flip', options: { boundary: document.documentElement, rootBoundary: 'viewport', padding: 8,
            fallbackPlacements: ['bottom-end', 'top-start', 'bottom-start'] } }
        ])
      })
    });
    toggle.addEventListener('show.bs.dropdown', this.onCurrencyShow);
    toggle.addEventListener('shown.bs.dropdown', this.onCurrencyShown);
    window.addEventListener('keydown', this.onWindowKeydown, true);
  }

  private applyTheme(theme: Theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  private getPreferredTheme(): Theme {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch (e) {
      // Ignore and fall back to the system preference.
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
