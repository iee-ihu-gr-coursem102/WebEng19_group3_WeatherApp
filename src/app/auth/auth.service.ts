import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { User } from './user.model';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import { Router } from '@angular/router';

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
    return this.http
    .get(
      'https://api.weatherbit.io/v2.0/current?city=thessaloniki&key=2acc7fe7dd8b4653a93d8e7ca4ed16bf'
      ).pipe(
        tap(data => {
          console.log(data);
        })
      );
  }

  private handleAuth(token: string, expiresIn: number, user: any) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new User(token, expirationDate, user);
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
}
