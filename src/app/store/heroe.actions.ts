import { Action } from '@ngrx/store';
import { HeroModel } from '../models/hero.model'

export enum HeroeActionTypes {
    SET_HEROES = 'Set Heroes',
}

export class SetHeroes implements Action {
    readonly type = HeroeActionTypes.SET_HEROES;
    constructor(public payload: HeroModel[]) {
    }
}

export type HeroeActions = SetHeroes;
