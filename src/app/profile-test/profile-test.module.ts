import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTestPageRoutingModule } from './profile-test-routing.module';

import { ProfileTestPage } from './profile-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTestPageRoutingModule
  ],
  declarations: [ProfileTestPage]
})
export class ProfileTestPageModule {}
