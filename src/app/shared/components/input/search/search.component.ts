import { Component, Input } from "@angular/core";

@Component({
  selector: "tech-search",
  template: `
    <div [ngClass]="customClass">
      <label for="search" class="block text-sm font-medium text-gray-700 sr-only">Search</label>
      <div class="relative flex items-center w-full">
        <input
          [ngClass]="customInputClass"
          type="text"
          name="search"
          id="search"
          class="block w-full rounded-md dark:bg-gray-800 dark:border-transparent dark:text-white border-gray-300 pr-12 shadow-sm focus:border-primary-800 focus:ring-primary-500 sm:text-sm"
        />
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            class="inline-flex items-center rounded border border-gray-200 dark:border-gray-600 dark:bg-slate-700 px-2 font-sans text-sm font-medium text-gray-400"
            >⌘K</kbd
          >
        </div>
      </div>
    </div>
  `,
})
export class SearchComponent {
  @Input() customClass: string = "";
  @Input() customInputClass: string = "";

  constructor() {}

  ngOnInit(): void {}
}
