import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarMenu') sidebarMenu: ElementRef;

  links: SidebarLink[] = [
    { path: '/overview', label: 'Overview', icon: 'bi-grid-1x2' },
    { path: '/transactions', label: 'Transactions', icon: 'bi-list-ul' },
    { path: '/budgets', label: 'Budgets', icon: 'bi-pie-chart' },
    { path: '/reports', label: 'Reports', icon: 'bi-bar-chart-line' }
  ];

  theme: Theme = 'light';

  get isDark(): boolean {
    return this.theme === 'dark';
  }

  constructor() { }

  ngOnInit() {
    // index.html sets the attribute before Angular boots (avoids a flash);
    // resolve it again here in case that script did not run.
    const current = document.documentElement.getAttribute('data-bs-theme');
    this.applyTheme(current === 'dark' || current === 'light' ? current : this.getPreferredTheme());
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
