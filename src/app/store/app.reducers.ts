import { ActionReducerMap } from "@ngrx/store";
import * as heroeReducers from './heroe.reducers';

export interface AppState {
    heroesState: heroeReducers.IHeroesState;
}

export const reducers: ActionReducerMap<AppState> = {
    heroesState: heroeReducers.reducer
};