import { AbstractControl, ValidationErrors } from '@angular/forms';

/** Valid when the value is a finite number that is still > 0 after rounding to paise. */
export function positiveAmount(control: AbstractControl): ValidationErrors | null {
  const raw = control.value;
  const value = typeof raw === 'number' ? raw : parseFloat(raw);
  return isFinite(value) && Math.round(value * 100) > 0 ? null : { positiveAmount: true };
}
