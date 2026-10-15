import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/** Alert style: 'success' confirms an action, 'danger' explains why one couldn't be done. */
export type AlertType = 'success' | 'danger';

export interface AppAlert {
  message: string;
  type: AlertType;
}

/**
 * Shows the app's single toast-style alert (rendered once by <app-alert> in the app shell),
 * so any page or modal can confirm an action.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertsSubject = new Subject<AppAlert>();

  /** Emits every alert to show; a new one replaces the current one. */
  alerts$: Observable<AppAlert> = this.alertsSubject.asObservable();

  show(message: string, type: AlertType = 'success') {
    this.alertsSubject.next({ message, type });
  }
}
