import { Action } from '@ngrx/store';
import { HeroModel } from '../models/hero.model'

export enum HeroActionTypes {
    LOAD_HEROES = '[Heroes] Load Heroes',
    SET_HEROES = '[Heroes] Set Heroes',
    LOAD_HEROES_ERROR = '[Heroes] Load Heroes Error',
    EDIT_HERO = '[Heroes] Edit Hero',
    SET_FAVORITE_HERO = '[Heroes] Set Favorite Hero',
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

export class EditHero implements Action {
    readonly type = HeroActionTypes.EDIT_HERO;
    constructor(public hero: HeroModel) {}
}

export class SetFavoriteHero implements Action {
    readonly type = HeroActionTypes.SET_FAVORITE_HERO;
    constructor(public heroId: number) {}
}

export type HeroActions = LoadHeroes | SetHeroes | LoadHeroesError | EditHero | SetFavoriteHero;
