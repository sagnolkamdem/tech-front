import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './components/button/button.module';
import { InputModule } from './components/input/input.module';
import { ThemeModule } from './components/theme/theme.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    ThemeModule,
  ],
  exports: [ButtonModule, InputModule, ThemeModule]
})
export class SharedModule { }
