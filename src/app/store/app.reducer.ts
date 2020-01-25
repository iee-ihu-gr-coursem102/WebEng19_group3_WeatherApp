import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromSearch from '../search/store/search.reducer';

export interface AppState {
  auth: fromAuth.State;
  search: fromSearch.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  search: fromSearch.searchReducer
};
