import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['auth.page.scss']
})
export class AuthPage implements OnInit {
  selectedLanguage: string;
  isLoading = false;
  year: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.year = Date.now();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const user_id = form.value.user_id;
    const password = form.value.password;
    this.isLoading = true;
    this.authService.login(user_id, password).subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
    form.reset();
  }

  async modalAlert(mng) {
    const alert = await this.alertController.create({
      header: 'error',
      message: mng,
      buttons: [{text: 'Ok'}]
    });
    await alert.present();
  }

  signup() {
    console.log('signUp');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
