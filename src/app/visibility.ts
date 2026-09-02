import { afterRenderEffect, Directive, ElementRef, inject, NgZone, output } from '@angular/core';

@Directive({
  selector: '[appObserveVisibility]',
})
export class ObserveVisibilityDirective {
  visible = output<boolean>();

  private observer: IntersectionObserver | null = null;

  private el = inject(ElementRef);
  private ngZone = inject(NgZone);

  constructor() {
    afterRenderEffect((onCleanup) => {
      this.createObserver();
      onCleanup(() => {
        if (this.observer) {
          this.observer.disconnect(); // Prevent memory leaks
        }
      });
    });
  }

  private createObserver(): void {
    const options: IntersectionObserverInit = {
      root: null, // defaults to the browser viewport
      rootMargin: '0px',
      threshold: 0.12, // triggers when 10% of the element is visible
    };
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Bring execution back into Angular zone to update UI/state safely

            this.ngZone.run(() => this.visible.emit(true));
          } else {
            this.ngZone.run(() => this.visible.emit(false));
          }
        });
      }, options);

      if (this.el.nativeElement) {
        this.observer.observe(this.el.nativeElement);
      }
    });
  }
}
