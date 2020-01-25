import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as CityAction from '../search/store/search.actions';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }

  searchForCity(city) {
    return this.http
    .get(
      'https://api.weatherbit.io/v2.0/current?city=' + city + '&key=2acc7fe7dd8b4653a93d8e7ca4ed16bf'
      ).pipe(
        tap(data => {
          this.store.dispatch(new CityAction.SetCity(data));
        })
      );
  }
}
