import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { HeroesService } from './../core/services/heroes.service';
//import {HeroActionTypes} from './hero.actions'
import * as HeroActions from './hero.actions';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class HeroEffects {

  constructor(
    private actions$: Actions,
    public heroesService: HeroesService
  ) {
  }

  //@Effect()
  setMediaPlan$ = createEffect(() => this.actions$.pipe(
    ofType(HeroActions.HeroActionTypes.LOAD_HEROES),
    mergeMap(() => this.heroesService.getHeroes()
      .pipe(
        map(heroes => new HeroActions.SetHeroes(heroes)),
        catchError(error => of(new HeroActions.LoadHeroesError(error)))
      )
    )
  )
  );
}