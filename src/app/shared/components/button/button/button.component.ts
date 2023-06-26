import { Component, Input } from '@angular/core';
import clsx from 'clsx';

@Component({
  selector: 'tech-button',
  template: `
    <button [ngClass]="className" class="" [type]="type">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() href: string | undefined;
  @Input() customClass: string | undefined;
  @Input() name: string = '';

  _intent: 'primary' | 'secondary' | 'warning' | 'danger' | undefined;

  get intent(): 'primary' | 'secondary' | 'warning' | 'danger' | undefined {
    return this._intent;
  }

  @Input() set intent(value: 'primary' | 'secondary' | 'warning' | 'danger' | undefined) {
    this._intent = value;
    this.handleIntenChange();
  }

  className = '';

  constructor() {}

  ngOnInit(): void {
    this.handleIntenChange();
  }

  handleIntenChange() {
    this.className = clsx(
      'inline-flex items-center rounded-md border border-transparent transition duration-300 px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
      this.customClass,
      {
        'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500': this.intent === 'primary',
        'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500': this.intent === 'secondary',
        'bg-danger-600 hover:bg-danger-700 text-white focus:ring-danger-500': this.intent === 'danger',
        'bg-transparent text-slate-700 dark:text-slate-200 dark:hover:bg-gray-900/40 hover:bg-slate-50 focus:ring-gray-300 dark:focus:ring-gray-700 border border-slate-300 dark:border-slate-700 dark:hover:bg-gray-800':
          this.intent === undefined,
      }
    );
  }
}
