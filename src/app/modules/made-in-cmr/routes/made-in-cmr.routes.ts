import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "src/app/shared/components/theme/layout/home-layout/home-layout.component";
import { MadeInCmrComponent } from "../pages/made-in-cmr/made-in-cmr.component";

export const MADE_IN_CMR_ROUTE: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: MadeInCmrComponent,
        title: "Made In CMR",
      },
    ],
  },
];
