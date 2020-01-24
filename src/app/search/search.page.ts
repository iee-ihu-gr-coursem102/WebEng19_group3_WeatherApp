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
    console.log(this.search);
    // const loading = await this.loadingController.create({
    //   message: 'loading'
    // });
    // loading.present();

    this.dataStoraService.searchForCity(this.search).subscribe(
      data => {
      console.log(data);
      this.city = data;
    });
    console.log(this.city);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
