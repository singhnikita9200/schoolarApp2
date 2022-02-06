import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TabComponent } from './tab/tab.component';
// import { IonBottomSheetModule } from 'ion-bottom-sheet';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // IonBottomSheetModule
  ],
  declarations: [HomePage,TabComponent]
})
export class HomePageModule {}
