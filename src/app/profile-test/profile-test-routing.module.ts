import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTestPage } from './profile-test.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTestPageRoutingModule {}
