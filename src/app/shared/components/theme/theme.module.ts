import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeLayoutComponent]
})
export class ThemeModule { }
