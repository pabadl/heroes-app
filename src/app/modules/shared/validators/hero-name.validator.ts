import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn, AbstractControl, FormControl } from "@angular/forms";
import { Observable, of, from } from "rxjs";
import { map } from "rxjs/operators";
import { HeroesService } from "../../../core/services/heroes.service";
import * as _ from 'lodash';
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.reducers";
import { HeroModel } from "../../../models/hero.model";

@Injectable({
    providedIn: 'root'
  })
  export class HeroNameValidators {
    
    heroes: HeroModel[] = [];
     
    constructor(public heroesService: HeroesService,
                private store: Store<AppState>) {}

    nameValidator(): AsyncValidatorFn {
      return (control: FormControl): Observable<{ [key: string]: any } | null> => {
        return this.heroesService.getHeroes()
          .pipe(
            map(heroes => {
              const hero = _.find(heroes, hero => hero._name === control.value);
              // if username is already taken
              if (hero!==undefined && control.pristine === false) {
                // return error
                return { 'heroNameExists': true};
              }
            })
          );
      };
    }
    
    nameValidator2(): AsyncValidatorFn {
        return (control: FormControl): Observable<{ [key: string]: any } | null> => {
          return  this.store.select('heroState')
            .pipe(
              map(heroes => {
                const hero = _.find(heroes.heroes, hero => hero._name === control.value);
                // if username is already taken
                if (hero!==undefined && control.pristine === false) {
                  // return error
                  return { 'heroNameExists': true};
                }
              })
            );
        };
      }
}