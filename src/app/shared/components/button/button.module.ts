import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, LinkComponent]
})
export class ButtonModule { }
