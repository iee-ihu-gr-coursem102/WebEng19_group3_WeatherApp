import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataStorageService } from '../../../shared/data-storage.service';


@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html'
})
export class FavoriteItemPage implements OnInit {
  modal: HTMLIonModalElement;
  currentUserUserId: string;

  constructor(
    public alertController: AlertController,
    private dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
    this.currentUserUserId = JSON.parse(localStorage.getItem('userData')).user.user_id;
  }

  async onDeleteUser() {
    const alert = await this.alertController.create({
      header: 'delete_admin',
      message: 'delete_message',
      buttons: [{
        text: 'cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blash) => { }
      }, {
        text: 'delete',
        handler: () => {
          // this.admin.type = 'delete';
          // this.dataStorageService.deleteAdmin(this.admin);
        }
      }
      ]
    });
    await alert.present();
  }

  onCityClick() {
    console.log('city click');
    
  }

}
