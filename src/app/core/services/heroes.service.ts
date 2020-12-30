import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, timeout, delay, concatMap } from 'rxjs/operators';
import { HeroModel } from "../../models/hero.model";
import * as _ from 'lodash';
import { of } from "rxjs";
import { HEROES_POWERS } from "../../modules/shared/constants/heroes-powers.constants";

@Injectable()
export class HeroesService {
    private url = 'https://udem.herokuapp.com/heroes';

    heroes: HeroModel[] = [];

    constructor(private http: HttpClient) {}

    getHeroes() {
        let idTemporal = 1;
        return this.getHeroesPowers().pipe(
            concatMap(powers => {
                return this.http.get(this.url)
                        .pipe(
                            map((resp:HeroModel[]) => {
                                this.heroes = resp;                           
                                this.heroes.forEach((hero: HeroModel) => {
                                    hero._id = idTemporal;
                                    idTemporal = idTemporal + 1;
                                    let power = _.find(powers, power => power.heroId == hero._id);
                                    (power !== undefined) ? hero._power = power.power : hero._power = 'Not available';                      
                                });
                                return this.heroes;
                            })
                        );
                
            })
        )
    }

    getHeroById(heroes: HeroModel[], heroeId: string) {
        return _.find(heroes, hero => hero._id == heroeId);
    }

    getHeroesPowers(){
        return of(HEROES_POWERS).pipe(
            delay(1000)
        );
    }
}