import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "tech-badge",
  template: `
    <span
      [ngClass]="customClass"
      class="inline-flex capitalize items-center bg-purple-100 text-purple-800 rounded-full px-3 py-0.5 text-sm font-medium"
    >
      <ng-content></ng-content>
    </span>
  `,
})
export class BadgeComponent implements OnInit {
  @Input() customClass: string = "";

  colors: string[] = [
    "primary",
    "secondary",
    "emerald",
    "rose",
    "purple",
    "orange",
    "indigo",
    "amber",
    "slate",
    "cyan",
    "blue",
    "pink",
    "fuchsia",
  ];

  ngOnInit() {
    const color = this.colors[Math.floor(Math.random() * (this.colors.length - 1))];
    const bg = `bg-${color}-100`;
    const text = `text-${color}-800`;
    this.customClass = this.customClass + " " + bg + " " + text;
  }
}
