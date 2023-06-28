import { Component, Input } from "@angular/core";

@Component({
  selector: "tech-cmr-solution",
  templateUrl: "./cmr-solution.component.html",
  styleUrls: ["./cmr-solution.component.scss"],
})
export class CmrSolutionComponent {
  @Input() link: string = "";
}
