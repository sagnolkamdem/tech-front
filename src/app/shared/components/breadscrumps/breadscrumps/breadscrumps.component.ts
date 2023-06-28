import { Component, Input } from "@angular/core";

export interface BreadscrumpsType {
  name: string;
  link: string;
}

@Component({
  selector: "tech-breadscrumps",
  templateUrl: "./breadscrumps.component.html",
  styleUrls: ["./breadscrumps.component.scss"],
})
export class BreadscrumpsComponent {
  @Input() breads: BreadscrumpsType[] = [];
}
