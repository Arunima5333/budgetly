import { Injectable } from '@angular/core';
import { asyncScheduler, defer, merge, Observable, of, Subject } from 'rxjs';
import { observeOn } from 'rxjs/operators';

/**
 * Alert style: 'success' confirms an action, 'danger' explains why one couldn't be done,
 * 'warning' reports a problem the app recovered from (e.g. unreadable saved data).
 */
export type AlertType = 'success' | 'danger' | 'warning';

export interface AppAlert {
  message: string;
  type: AlertType;
}

/**
 * Shows the app's single toast-style alert (rendered once by <app-alert> in the app shell),
 * so any page, modal or service can confirm an action or report a problem.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertsSubject = new Subject<AppAlert>();

  /**
   * An alert shown before anything subscribed (e.g. DataService warning about saved data while the app starts,
   * before <app-alert> exists). Delivered once to the first subscriber, then dropped: never replayed.
   */
  private pending: AppAlert | null = null;

  private dismissSubject = new Subject<void>();

  /** While true (phone menu open), new alerts wait here (latest only) and are shown when released. */
  private holding = false;
  private heldAlert: AppAlert | null = null;

  /** Emits when the visible alert should disappear immediately (e.g. the phone menu opens over it). */
  dismissed$: Observable<void> = this.dismissSubject.asObservable();

  /** Emits every alert to show; a new one replaces the current one. */
  alerts$: Observable<AppAlert> = defer(() => {
    const pending = this.pending;
    this.pending = null;
    // Delivered on the next tick so the subscriber has finished initialising.
    return pending ? merge(of(pending).pipe(observeOn(asyncScheduler)), this.alertsSubject) : this.alertsSubject;
  });

  show(message: string, type: AlertType = 'success') {
    const alert = { message, type };
    if (this.holding) {
      this.heldAlert = alert;
      return;
    }
    this.emit(alert);
  }

  /** Hides the visible alert now (no fade timer). */
  dismiss() {
    this.dismissSubject.next(undefined);
  }

  /**
   * Holds new alerts while `hold` is true (they would cover the phone slide-out menu); releasing shows the
   * latest held alert, if any.
   */
  holdAlerts(hold: boolean) {
    this.holding = hold;
    if (!hold && this.heldAlert) {
      const alert = this.heldAlert;
      this.heldAlert = null;
      this.emit(alert);
    }
  }

  private emit(alert: AppAlert) {
    if (this.alertsSubject.observers.length) {
      this.alertsSubject.next(alert);
    } else {
      this.pending = alert;
    }
  }
}
