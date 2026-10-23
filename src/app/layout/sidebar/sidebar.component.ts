import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AlertService } from '../../core/services/alert.service';

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

  links: SidebarLink[] = [
    { path: '/overview', label: 'Overview', icon: 'bi-grid-1x2' },
    { path: '/transactions', label: 'Transactions', icon: 'bi-list-ul' },
    { path: '/budgets', label: 'Budgets', icon: 'bi-pie-chart' },
    { path: '/reports', label: 'Reports', icon: 'bi-bar-chart-line' }
  ];

  theme: Theme = 'light';

  /** Phone/tablet menu opening: clear any alert (it would sit over the menu links) and hold new ones. */
  private readonly onMenuShow = () => {
    this.alertService.holdAlerts(true);
    this.alertService.dismiss();
  }

  /** Menu closed: show the latest held alert, if any. */
  private readonly onMenuHidden = () => {
    this.alertService.holdAlerts(false);
  }

  get isDark(): boolean {
    return this.theme === 'dark';
  }

  constructor(private alertService: AlertService) { }

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
    menu.addEventListener('hidden.bs.offcanvas', this.onMenuHidden);
  }

  ngOnDestroy() {
    const menu: HTMLElement = this.sidebarMenu.nativeElement;
    menu.removeEventListener('show.bs.offcanvas', this.onMenuShow);
    menu.removeEventListener('hidden.bs.offcanvas', this.onMenuHidden);
    this.alertService.holdAlerts(false);
  }

  toggleTheme() {
    this.applyTheme(this.isDark ? 'light' : 'dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, this.theme);
    } catch (e) {
      // Storage unavailable (private mode, blocked); the choice just won't persist.
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
