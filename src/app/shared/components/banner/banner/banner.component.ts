import { Component } from "@angular/core";

@Component({
  selector: "tech-banner",
  template: `
    <!-- overflow-hidden -->
    <section class="relative isolate bg-gradient-to-b py-14 sm:py-16 lg:py-20">
      <div class="px-4 mx-auto sm:px-6 max-w-8xl lg:px-8">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class BannerComponent {}
