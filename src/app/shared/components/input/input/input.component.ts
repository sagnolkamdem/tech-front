import { Component, Input } from "@angular/core";

@Component({
  selector: "tech-input",
  template: `
    <div [ngClass]="customClass">
      <label for="search" class="block text-sm font-medium text-gray-700 sr-only">Search</label>
      <div class="flex items-center w-full">
        <input
          [ngClass]="customInputClass"
          type="text"
          name="search"
          id="search"
          [placeholder]="placeholder"
          class="block z-50 w-full rounded-md placeholder:text-slate-400 dark:bg-gray-800 dark:border-transparent dark:text-white border-gray-300 pr-12 shadow-sm focus:border-primary-800 focus:ring-primary-500 sm:text-sm"
        />
      </div>
    </div>
  `,
})
export class InputComponent {
  @Input() customClass: string = "";
  @Input() customInputClass: string = "";
  @Input() placeholder: string = "";

  constructor() {}

  ngOnInit(): void {}
}
