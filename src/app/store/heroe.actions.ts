import { Action } from '@ngrx/store';
import { HeroeModel } from '../models/heroe.model'

export enum HeroeActionTypes {
    SET_HEROES = 'Set Heroes',
}

export class SetHeroes implements Action {
    readonly type = HeroeActionTypes.SET_HEROES;
    constructor(public payload: HeroeModel[]) {
    }
}

export type HeroeActions = SetHeroes;
