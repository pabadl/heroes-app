import { Action } from '@ngrx/store';
import { HeroModel } from '../models/hero.model'

export enum HeroActionTypes {
    LOAD_HEROES = '[Heroes] Load Heroes',
    SET_HEROES = '[Heroes] Set Heroes',
    LOAD_HEROES_ERROR = '[Heroes] Load Heroes Error',
    UPDATE_HEROE = '[Heroes] Update Heroe',
}

export class LoadHeroes implements Action {
    readonly type = HeroActionTypes.LOAD_HEROES;
}
export class SetHeroes implements Action {
    readonly type = HeroActionTypes.SET_HEROES;
    constructor(public heroes: HeroModel[]) {}
}
export class LoadHeroesError implements Action {
    readonly type = HeroActionTypes.LOAD_HEROES_ERROR;
    constructor(public payload: any ) {}
}

export class UpdateHeroe implements Action {
    readonly type = HeroActionTypes.UPDATE_HEROE;
    constructor(public hero: HeroModel) {}
}

export type HeroActions = LoadHeroes | SetHeroes | LoadHeroesError | UpdateHeroe;
