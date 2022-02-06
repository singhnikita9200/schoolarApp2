import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
@Input() name:string;
@Input() age:string

  constructor(private modeControlar: ModalController) { }

  ngOnInit() {}

  close(){
   this.modeControlar.dismiss({
     'name':'riya'
   });
  }
}
