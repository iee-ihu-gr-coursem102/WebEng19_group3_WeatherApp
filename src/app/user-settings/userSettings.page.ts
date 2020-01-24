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
  selector: 'app-userSettings',
  templateUrl: './userSettings.page.html',
  styleUrls: ['./userSettings.page.scss'],
})
export class UserSettingsPage implements OnInit {

  public currentUser: any;
  public dataUser = {
    username: 'admin',
    password: '',
    firstName: 'petros',
    lastName: 'Karkanis',
    image: '',
    email: 'petros751@hotmail.com',
    gender: 'man'
  };

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
      console.log('backdrop-hide');
  }

  ionViewDidEnter() {
    console.log('backdrop-hide');
    this.currentUser = this.dataUser;
    console.log(this.currentUser);
  //   this.userSubscription = this.store
  //     .select('auth')
  //     .pipe(map(authState => authState.user))
  //     .subscribe(user_data => {
  //       this.isAuthenticated = (user_data && user_data.user) ? !!user_data.token : false;
  //       if (this.isAuthenticated) {
  //         this.currentUser = user_data.user;
  //         console.log("this.currentUser", this.currentUser);
  //       }
  //     });
  }

 async handleUserProfile() {
    const loading = await this.loadingController.create({
      message: 'loading'
    });
    loading.present();
  //   this.dataStoraService.handleUserProfile(this.currentUser).subscribe(
  //     async resData => {
  //       console.log('resData', resData);
  //       loading.dismiss();
  //       if (!resData.success) {
  //         const alert = await this.alertController.create({
  //           header: 'alert',
  //           message: 'resData.comment_id',
  //           buttons: ['OK']
  //         });
  //         await alert.present();
  //       }
  //     },
  //     async error => {
  //       loading.dismiss();
  //       console.log(error);
  //       const alert = await this.alertController.create({
  //         header: 'alert',
  //         message: 'error.message',
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     }
  //   );
  }
}
