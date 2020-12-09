import { HeroModel } from '../models/hero.model'
import {HeroActions, HeroActionTypes} from './hero.actions'

export interface IHeroState {
  heroes: HeroModel[];
  error: any;
}

const initialState: IHeroState = {
  heroes: null,
  error: null
}

export function reducer(state = initialState, action: HeroActions) {
  switch (action.type) {
    case HeroActionTypes.LOAD_HEROES:
      return {
        ...state, 
        error: null
      };
    case HeroActionTypes.SET_HEROES:
      return {
        ...state, 
        heroes: action.heroes
      };
    case HeroActionTypes.LOAD_HEROES_ERROR:
      return {
        ...state, 
        error: action.payload
      };
    case HeroActionTypes.UPDATE_HEROE:
      return {
        ...state, 
        hero: action.hero
      };
    default:
      return state;
  }
}