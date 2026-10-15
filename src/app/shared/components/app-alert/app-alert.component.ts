import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService, AppAlert } from '../../../core/services/alert.service';

/** How long an alert stays before it fades out (danger stays longer to read), and the fade-out duration (matches the CSS). */
const VISIBLE_MS = { success: 4000, danger: 6000 };
const FADE_OUT_MS = 300;

/**
 * The app's single alert, placed once in the app shell (outside the router outlet).
 * Each show() renders a fresh element so role="alert" is announced, fades in, and fades out
 * after ~4s (success) or ~6s (danger); a new show() while visible replaces the message and restarts the timer.
 */
@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css']
})
export class AppAlertComponent implements OnInit, OnDestroy {
  alert: AppAlert | null = null;
  leaving = false;
  /**
   * <use> reference to the sprite symbol. With <base href="/"> a bare "#id" resolves to "/#id",
   * which on other routes (/transactions…) points at a different document in some browsers, so the
   * reference includes the current path.
   */
  iconHref = '#check-circle-fill';

  private subscription: Subscription;
  private hideTimer: any = null;
  private removeTimer: any = null;

  constructor(private alertService: AlertService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.alertService.alerts$.subscribe(alert => this.present(alert));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clearTimers();
  }

  private present(alert: AppAlert) {
    this.clearTimers();
    // Remove any current alert first so the new element is inserted (and announced) fresh.
    this.alert = null;
    this.leaving = false;
    this.cdr.detectChanges();

    const symbol = alert.type === 'danger' ? '#exclamation-triangle-fill' : '#check-circle-fill';
    this.iconHref = window.location.pathname + window.location.search + symbol;
    this.alert = alert;
    this.cdr.detectChanges();

    this.hideTimer = setTimeout(() => {
      this.leaving = true;
      this.cdr.detectChanges();
      this.removeTimer = setTimeout(() => {
        this.alert = null;
        this.leaving = false;
        this.cdr.detectChanges();
      }, FADE_OUT_MS);
    }, VISIBLE_MS[alert.type]);
  }

  private clearTimers() {
    clearTimeout(this.hideTimer);
    clearTimeout(this.removeTimer);
    this.hideTimer = null;
    this.removeTimer = null;
  }
}
