import { HeroeModel } from '../models/heroe.model'
import {HeroeActions, HeroeActionTypes} from './heroe.actions'

export interface IHeroesState {
  heroes: HeroeModel[];
  state: string;
}

const initialState: IHeroesState = {
  heroes: null,
  state: 'Pending'
}

export function reducer(state = initialState, action: HeroeActions) {
  //console.log(action);
  switch (action.type) {
    case HeroeActionTypes.SET_HEROES:
      return {...state, ...action.payload};
    default:
      return state;
  }
}