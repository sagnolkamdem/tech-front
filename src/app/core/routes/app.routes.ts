import { Routes } from "@angular/router";

export const APP_ROUTE: Routes = [
  {
    path: "",
    loadChildren: () => import("../../modules/home/home.module").then(m => m.HomeModule),
  },
  {
    path: "blog",
    loadChildren: () => import("../../modules/blog/blog.module").then(m => m.BlogModule),
  },
  {
    path: "made-in-cmr",
    loadChildren: () => import("../../modules/made-in-cmr/made-in-cmr.module").then(m => m.MadeInCmrModule),
  },
  {
    path: "auth",
    loadChildren: () => import("../../modules/authentication/authentication.module").then(m => m.AuthenticationModule),
  },
];
