import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { DrawerComponent } from "./drawer/drawer.component";

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [DrawerComponent, MatSidenavModule],
})
export class DrawerModule {}
