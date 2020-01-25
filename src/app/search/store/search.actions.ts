import { Action } from '@ngrx/store';

export const SET_CITY = '[City] Set City';


export class SetCity implements Action {
  readonly type = SET_CITY;
  constructor(
    public payload: any
  ) { }
}





export type SearchActions = SetCity;
