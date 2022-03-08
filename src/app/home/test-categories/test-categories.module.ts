import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCategoriesPageRoutingModule } from './test-categories-routing.module';

import { TestCategoriesPage } from './test-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCategoriesPageRoutingModule
  ],
  declarations: [TestCategoriesPage]
})
export class TestCategoriesPageModule {}
