import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { MadeInCmrComponent } from "./pages/made-in-cmr/made-in-cmr.component";
import { RouterModule } from "@angular/router";
import { MADE_IN_CMR_ROUTE } from "./routes/made-in-cmr.routes";
import { CmrSolutionComponent } from './components/cmr-solution/cmr-solution.component';

@NgModule({
  declarations: [MadeInCmrComponent, CmrSolutionComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(MADE_IN_CMR_ROUTE)],
})
export class MadeInCmrModule {}
