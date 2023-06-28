import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";

import { ButtonModule } from "./components/button/button.module";
import { InputModule } from "./components/input/input.module";
import { ThemeModule } from "./components/theme/theme.module";
import { BannerModule } from "./components/banner/banner.module";
import { BreadscrumpsModule } from "./components/breadscrumps/breadscrumps.module";
import { BadgeModule } from "./components/badge/badge.module";
import { DrawerModule } from "./components/drawer/drawer.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    ThemeModule,
    BannerModule,
    BreadscrumpsModule,
    BadgeModule,
    MatSidenavModule,
    DrawerModule,
  ],
  exports: [
    ButtonModule,
    InputModule,
    ThemeModule,
    BannerModule,
    BreadscrumpsModule,
    BadgeModule,
    MatSidenavModule,
    DrawerModule,
  ],
})
export class SharedModule {}
