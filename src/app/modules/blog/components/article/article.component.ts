import { Component, Input } from "@angular/core";

@Component({
  selector: "tech-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent {
  @Input() link: string = "";
  @Input() position!: number;
}
