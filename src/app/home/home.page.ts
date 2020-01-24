import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map, take, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'home-root',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  auth: any;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}

}
