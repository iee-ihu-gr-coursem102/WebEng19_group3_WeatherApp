import { Component } from '@angular/core';
import { ModalController, AlertController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map, auditTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'
})
export class SearchPage {
  public search = null;
  city: any;
  public currentCity: string;
  public isCityFound = false;

  constructor(
    private modalController: ModalController,
    private store: Store<fromApp.AppState>,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private loadingController: LoadingController,
    private dataStoraService: DataStorageService
  ) { }

   async searchForCity() {
    this.dataStoraService.searchForCity(this.search)
    .subscribe(
      async resData => {
        console.log('resData', resData);
        if (resData !== 'null') {
          this.city = resData;
          this.currentCity = this.search;
          this.isCityFound = true;
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

  closeModal() {
    this.modalController.dismiss();
  }
}
