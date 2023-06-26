import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "src/app/shared/components/theme/layout/home-layout/home-layout.component";
import { HomeComponent } from "../pages/home/home.component";

export const HOME_ROUTES: Routes = [
    {
      path: '',
      component: HomeLayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
          title: "Page d'accueil",
        },
      ],
    },
  ];
  