import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliesChemistryPage } from './applies-chemistry.page';

const routes: Routes = [
  {
    path: '',
    component: AppliesChemistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliesChemistryPageRoutingModule {}
