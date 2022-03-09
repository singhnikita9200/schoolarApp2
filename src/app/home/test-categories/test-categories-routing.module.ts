import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCategoriesPage } from './test-categories.page';

const routes: Routes = [
  {
    path: '',
    component: TestCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCategoriesPageRoutingModule {}
