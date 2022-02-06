import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TabComponent } from '../tab/tab.component';
import { ToastController } from '@ionic/angular';
import { SheetState } from 'ion-bottom-sheet';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {
sheetState=SheetState.Bottom
  constructor(private modeControlar: ModalController,public alertController: AlertController
    ,public toastController: ToastController,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
//model open code
 async openModel(){
    console.log("hii");
    const modal= await this.modeControlar.create({
      component: TabComponent,
      componentProps:{
        'name':'nikita',
        'age':'23'
      },
      cssClass:'my-model-class'
    });
    modal.onDidDismiss().then((data:any)=>{
      console.log(data);
      
    })
  await modal.present();
  }

  //open alert

 async openAlert(){
     const alert= await this.alertController.create({
      header:"hello",
      inputs:[
        {
          name:'username',
          type:'text',
          placeholder:'username',
          value:'niki'
        },
        {
          name:'password',
          type:'password',
          placeholder:'password'
        },
      ],
      buttons:[
        {
          text:'ok',
          handler:(value:any)=>{
            console.log(value);
            
          }
        },
           'cancel']
    })
    await alert.present();
  }

  //open toast
 async openToast(){
  const toast = await this.toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    icon: 'information-circle',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  await toast.present();

  const { role } = await toast.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
  }

  //open bottom sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
