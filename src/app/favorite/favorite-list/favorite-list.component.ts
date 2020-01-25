import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html'
})
export class FavotiteListPage implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit() {
    // this.subscription = this.store
    // .select('admins')
    // .pipe(map(usersState => usersState.admins))
    // .subscribe((admins: Admin[]) => {
    //     this.admins = admins;
    //   }
    // );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
