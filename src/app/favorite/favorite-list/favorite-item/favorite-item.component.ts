import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataStorageService } from '../../../shared/data-storage.service';


@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html'
})
export class FavoriteItemPage implements OnInit {
  modal: HTMLIonModalElement;
  city: any;
  public currentCity: string;
  public isCityFound = false;
  constructor(
    public alertController: AlertController,
    private dataStoraService: DataStorageService
  ) { }

  async onDeleteUser() {
    const alert = await this.alertController.create({
      header: 'Θέλετε να διαγραφή απο τα αγαπημένα',
      message: '',
      buttons: [{
        text: 'Aκυρο',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blash) => { }
      }, {
        text: 'Διαγραφή',
        handler: () => {
          // this.admin.type = 'delete';
          // this.dataStorageService.deleteAdmin(this.admin);
        }
      }
      ]
    });
    await alert.present();
  }

  async onCityClickThes() {
    const search = 'thessaloniki';
    this.dataStoraService.searchForCity(search)
    .subscribe(
      async resData => {
        console.log('resData', resData);
        if (resData !== 'null') {
          this.city = resData;
          this.currentCity = search;
          this.isCityFound = true;
          const alert = await this.alertController.create({
            header: 'Καιρός:',
            subHeader: this.city.data[0].city_name,
            message: 'Η θερμοκρασία είναι:' + this.city.data[0].temp + 'c',
            buttons: ['OK']
          });
          await alert.present();
          console.log(this.city);
        } else {
          this.isCityFound = false;
          const alert = await this.alertController.create({
            header: 'alert',
            message: 'resData.comment_id',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );
  }

  async onCityClickAth() {
    const search = 'athens';
    this.dataStoraService.searchForCity(search)
    .subscribe(
      async resData => {
        console.log('resData', resData);
        if (resData !== 'null') {
          this.city = resData;
          this.currentCity = search;
          this.isCityFound = true;
          const alert = await this.alertController.create({
            header: 'Καιρός:',
            subHeader: this.city.data[0].city_name,
            message: 'Η θερμοκρασία είναι:' + this.city.data[0].temp + 'c',
            buttons: ['OK']
          });
          await alert.present();
          console.log(this.city);
        } else {
          this.isCityFound = false;
          const alert = await this.alertController.create({
            header: 'alert',
            message: 'resData.comment_id',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );
  }

  async onCityClickLar() {
    const search = 'new york';
    this.dataStoraService.searchForCity(search)
    .subscribe(
      async resData => {
        console.log('resData', resData);
        if (resData !== 'null') {
          this.city = resData;
          this.currentCity = search;
          this.isCityFound = true;
          const alert = await this.alertController.create({
            header: 'Καιρός:',
            subHeader: this.city.data[0].city_name,
            message: 'Η θερμοκρασία είναι:' + this.city.data[0].temp + 'c',
            buttons: ['OK']
          });
          await alert.present();
          console.log(this.city);
        } else {
          this.isCityFound = false;
          const alert = await this.alertController.create({
            header: 'alert',
            message: 'resData.comment_id',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );
  }

  async onCityClickLond() {
    const search = 'london';
    this.dataStoraService.searchForCity(search)
    .subscribe(
      async resData => {
        console.log('resData', resData);
        if (resData !== 'null') {
          this.city = resData;
          this.currentCity = search;
          this.isCityFound = true;
          const alert = await this.alertController.create({
            header: 'Καιρός:',
            subHeader: this.city.data[0].city_name,
            message: 'Η θερμοκρασία είναι:' + this.city.data[0].temp + 'c',
            buttons: ['OK']
          });
          await alert.present();
          console.log(this.city);
        } else {
          this.isCityFound = false;
          const alert = await this.alertController.create({
            header: 'alert',
            message: 'resData.comment_id',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );
  }


}
