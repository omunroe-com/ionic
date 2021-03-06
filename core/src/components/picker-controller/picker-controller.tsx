import { Component, Method, Prop } from '@stencil/core';

import { OverlayController, PickerOptions } from '../../interface';
import { createOverlay, dismissOverlay, getOverlay } from '../../utils/overlays';

/** @hidden */
@Component({
  tag: 'ion-picker-controller'
})
export class PickerController implements OverlayController {

  @Prop({ context: 'document' }) doc!: Document;

  /*
   * Create a picker overlay with picker options.
   */
  @Method()
  create(opts?: PickerOptions): Promise<HTMLIonPickerElement> {
    return createOverlay(this.doc.createElement('ion-picker'), opts);
  }

  /*
   * Dismiss the open picker overlay.
   */
  @Method()
  dismiss(data?: any, role?: string, pickerId?: number) {
    return dismissOverlay(this.doc, data, role, 'ion-picker', pickerId);
  }

  /*
   * Get the most recently opened picker overlay.
   */
  @Method()
  getTop(): HTMLIonPickerElement {
    return getOverlay(this.doc, 'ion-picker') as HTMLIonPickerElement;
  }
}
