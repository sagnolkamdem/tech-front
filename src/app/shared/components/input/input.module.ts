import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [SearchComponent, InputComponent],
  imports: [CommonModule],
  exports: [SearchComponent, InputComponent],
})
export class InputModule {}
