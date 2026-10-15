import { Component, Input } from '@angular/core';

let nextId = 0;

/**
 * The app's standard empty-state card (Bootstrap utilities only). Usage:
 * <app-empty-state heading="…" text="…" [hasActions]="true">
 *   <svg emptyIcon class="text-body-secondary" width="28" height="28" …></svg>
 *   <span emptyText>…rich text…</span>          (optional, instead of / after `text`)
 *   <div emptyActions class="d-grid d-sm-flex justify-content-sm-center gap-2">…buttons…</div>
 * </app-empty-state>
 * The icon colour comes from the projected svg (text-body-secondary or icon-accent).
 */
@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html'
})
export class EmptyStateComponent {
  @Input() heading = '';
  /** Plain body text; projected [emptyText] content is shown after it. */
  @Input() text = '';
  /** Show the [emptyActions] slot under the text (kept out of the layout otherwise, so no extra gap). */
  @Input() hasActions = false;
  /** Less top/bottom space below lg (py-4 / my-3); unchanged from lg up. Off by default. */
  @Input() compactMobile = false;

  readonly headingId = 'empty-state-' + (++nextId) + '-title';
}
