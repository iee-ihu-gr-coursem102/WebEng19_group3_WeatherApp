import * as SearchActions from './search.actions';
import * as _ from 'lodash';

export interface State {
  city: any;
}

const initialState: State = {
  city: null
};

export function searchReducer(
  state = initialState,
  action: SearchActions.SearchActions
) {
  switch (action.type) {
    case SearchActions.SET_CITY:
      return {
        ...state,
        city: _.unionBy(state.city, action.payload)
      };
    default:
      return state;
  }
}
