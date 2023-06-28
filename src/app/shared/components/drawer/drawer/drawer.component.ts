import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, Output } from "@angular/core";

type position = "absolute" | "fixed" | undefined;

@Component({
  selector: "tech-drawer",
  template: `
    <div
      *ngIf="visible"
      class="inset-0 z-10"
      [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        *ngIf="overlay"
        [@showHideBackdrop]="isOpen ? 'showBackdrop' : 'hideBackdrop'"
        class="absolute inset-0 bg-gray-400 bg-opacity-50 transition-opacity"
        [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
      ></div>
      <div
        *ngIf="!overlay"
        class="inset-0"
        [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
      ></div>
      <div
        class="inset-0 overflow-hidden"
        [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
      >
        <div
          class="inset-0 overflow-hidden"
          [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
        >
          <div
            class="pointer-events-none inset-y-0 right-0 flex max-w-full pl-10"
            [ngClass]="{ absolute: position === 'absolute' || position === undefined, fixed: position === 'fixed' }"
          >
            <div
              [@showHidePanel]="isOpen ? 'showPanel' : 'hidePanel'"
              class="transform transition pointer-events-auto max-w-md"
              [ngClass]="class"
            >
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger("showHideBackdrop", [
      state("showBackdrop", style({ opacity: 1 })),
      state("hideBackdrop", style({ opacity: 0 })),
      transition("hideBackdrop => showBackdrop", animate(".5s ease-in-out")),
      transition("showBackdrop => hideBackdrop", animate(".5s ease-in-out")),
    ]),

    trigger("showHidePanel", [
      state("showPanel", style({ transform: "translateX(0)" })),
      state("hidePanel", style({ transform: "translateX(100%)" })),
      transition("hidePanel => showPanel", animate(".5s ease-in-out")),
      transition("showPanel => hidePanel", animate(".5s ease-in-out")),
    ]),
  ],
})
export class DrawerComponent {
  @Output() status: EventEmitter<boolean> = new EventEmitter();

  @Input() class!: string;
  @Input() position!: position;
  @Input() overlay!: boolean;
  @Input() set visible(value: boolean) {
    if (!value) {
      this.isOpen = value;
      setTimeout(() => (this._visible = value), 500);
    } else {
      this._visible = value;
      setTimeout(() => (this.isOpen = value), 50);
    }
  }

  _visible!: boolean;
  isOpen!: boolean;

  get visible(): boolean {
    return this._visible;
  }
}
