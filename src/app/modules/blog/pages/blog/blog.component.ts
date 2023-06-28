import { Component } from "@angular/core";
import { BreadscrumpsType } from "src/app/shared/components/breadscrumps/breadscrumps/breadscrumps.component";

@Component({
  selector: "tech-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  visible: boolean = false;

  toggleVisible() {
    this.visible = !this.visible;
  }
}
