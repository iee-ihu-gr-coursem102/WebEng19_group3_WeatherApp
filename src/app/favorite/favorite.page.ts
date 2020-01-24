import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map, auditTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html'
})
export class FavoritePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private store: Store<fromApp.AppState>,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private loadingController: LoadingController,
    private dataStoraService: DataStorageService
  ) { }

  ngOnInit() {
  }

}
