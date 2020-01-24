import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { AuthService } from './auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
    public appPages = [
    {
      id: 'search',
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      id: 'user-settings',
      title: 'User Settings',
      url: '/user-settings',
      icon: 'person'
    },
    {
      id: 'favorite',
      title: 'Favorite',
      url: '/favorite',
      icon: 'heart'
    }
  ];
  translatedMenu: any[] = [];
  private userSubscription: Subscription;
  public year = Date.now();
  currentUser: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  reloadApp() {
    window.location.reload();
  }
  ngOnInit() {
    //this.authService.autoLogin();
    this.userSubscription = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = (user && user.user) ? !!user.token : false;
        if (this.isAuthenticated) {
          console.log('User is authenticated');
          this.currentUser = user;
          console.log(this.currentUser);
          this.router.navigate(['/home']);
          this.setMenu();
        }
      });
  }

  setMenu() {
    console.log('setMenu');
    this.translatedMenu = this.appPages.map(m => ({
      ...m,
      title: m.title
    }));
    if (!this.currentUser.user.superadmin && !this.currentUser.user.permissions.includes('*')) {
      this.translatedMenu = [];
      this.appPages.forEach(m => {
        if (this.currentUser.user.permissions.includes(m.id)) {
          this.translatedMenu.push(m);
        } else if (m.id === 'admin-panel' && this.currentUser.user.admin) {
          this.translatedMenu.push(m);
        }
      });
    }
  }

  async onLogout() {
    const alert = await this.alertController.create({
      header: 'user_logout_dialog',
      buttons: [{
        text: 'cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => { }
      }, {
        text: 'logout',
        handler: async () => {
          this.authService.logout();
        }
      }]
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
