import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { User } from './user.model';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import { Router } from '@angular/router';

export class RenueTokenResponse {
  success: boolean;
  expiresIn: number;
  token: string;
  user: any;
}
export interface AuthResponseData {
  token: string;
  user: any;
  expiresIn: string;
  localId: string;
  success: boolean;
  comment_id: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpirationTimer: any;
  token: string;
  expirationDate: Date;
  user: any;
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private router: Router) { }

  login(user_id: string, password: string) {
    if (user_id === 'admin' && password === 'admin') {
      this.handleAuth('12345678910', 50000, 'admin');
    }
    // return this.http
    //   .post<AuthResponseData>(
    //     'https://api.pixair.gr/prod/pixair-panel-auth',
    //     {
    //       user_id,
    //       password
    //     }
    //   )
    //   .pipe(
    //     tap(resData => {
    //       console.log(resData.user);
    //       this.handleAuth(
    //         resData.token,
    //         +resData.expiresIn,
    //         resData.user
    //       );
    //     }),
    //   );
  }

  private handleAuth(token: string, expiresIn: number, user: any) {
    // console.log(user);
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new User(token, expirationDate, user);
    // console.log(newUser);
    this.loadUserOnState(token, expirationDate, user);

    localStorage.setItem('userData', JSON.stringify(newUser));
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expiresIn * 1000);
  }

  private loadUserOnState(token: string, expirationDate: Date, user: any) {
    this.store.dispatch(
      new AuthActions.Login({
        token,
        expirationDate,
        user
      })
    );
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/auth']);
    localStorage.clear();
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  // autoLogin() {
  //   if (localStorage.getItem('userData')) {
  //     try {
  //       this.token = JSON.parse(localStorage.getItem('userData')).token;
  //       this.expirationDate = new Date(JSON.parse(localStorage.getItem('userData')).tokenExpirationDate);
  //       this.user = JSON.parse(localStorage.getItem('userData')).user;
  //     } catch (er) {
  //       this.token = null;
  //       this.expirationDate = null;
  //       localStorage.clear();
  //     }

  //     if (this.token && this.expirationDate) {
  //       this.loadUserOnState(this.token, this.expirationDate, this.user);
  //       return this.http
  //         .post<RenueTokenResponse>(
  //           'https://api.pixair.gr/prod/pixair-api-renew-token',
  //           {}
  //         )
  //         .subscribe(resData => {
  //           console.log('autologin', resData);
  //           this.handleAuth(
  //             resData.token,
  //             +resData.expiresIn,
  //             resData.user
  //           );
  //         }, error => {
  //           this.logout();
  //         });
  //     } else {
  //       this.logout();
  //     }
  //   }
  // }
}
