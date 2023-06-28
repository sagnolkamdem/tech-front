import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "src/app/shared/components/theme/layout/home-layout/home-layout.component";
import { BlogComponent } from "../pages/blog/blog.component";
import { ArticleDetailsComponent } from "../pages/article-details/article-details.component";

export const BLOG_ROUTES: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: BlogComponent,
        title: "Blog",
      },
      {
        path: ":id",
        component: ArticleDetailsComponent,
        title: "Article Details",
      },
    ],
  },
];
