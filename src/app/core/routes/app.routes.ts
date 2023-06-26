import { Routes } from "@angular/router";

export const APP_ROUTE: Routes = [
    {
      path: '',
      loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'auth',
      loadChildren: () => import('../../modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
  ];