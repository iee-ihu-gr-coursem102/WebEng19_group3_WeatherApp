import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }

  searchForCity(city) {
    console.log(city);
    console.log('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fdd8d051b3dcaec03d74c815301614ff');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fdd8d051b3dcaec03d74c815301614ff');
  }
}
