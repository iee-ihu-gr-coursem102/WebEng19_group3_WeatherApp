// tslint:disable-next-line: import-spacing
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: any;
}

const initialState: State = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.token,
        action.payload.expirationDate,
        action.payload.user
      );
      return {
        ...state,
        user
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
