import { ActionReducerMap } from "@ngrx/store";
import * as heroReducers from './hero.reducers';

export interface AppState {
    heroState: heroReducers.IHeroState;
}

export const reducers: ActionReducerMap<AppState> = {
    heroState: heroReducers.reducer
};