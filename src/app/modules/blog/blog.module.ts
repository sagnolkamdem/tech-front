import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "./pages/blog/blog.component";
import { RouterModule } from "@angular/router";
import { BLOG_ROUTES } from "./routes/blog.routes";
import { ArticleComponent } from "./components/article/article.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { DetailsArticleComponent } from './pages/article-details/details-article/details-article.component';

@NgModule({
  declarations: [BlogComponent, ArticleComponent, ArticleDetailsComponent, DetailsArticleComponent],
  imports: [CommonModule, RouterModule.forChild(BLOG_ROUTES), SharedModule],
})
export class BlogModule {}
