import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliesChemistryPageRoutingModule } from './applies-chemistry-routing.module';

import { AppliesChemistryPage } from './applies-chemistry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliesChemistryPageRoutingModule
  ],
  declarations: [AppliesChemistryPage]
})
export class AppliesChemistryPageModule {}
