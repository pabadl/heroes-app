import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { HeroModel } from "../../models/hero.model";
import * as _ from 'lodash';

@Injectable()
export class HeroesService {
    private url = 'https://udem.herokuapp.com/heroes';

    heroes: HeroModel[] = [];

    constructor(private http: HttpClient) {}

    getHeroes() {
        let idTemporal = 1;
        return this.http.get(this.url)
                        .pipe(
                            map((resp:HeroModel[]) => {
                                this.heroes = resp;                           
                                this.heroes.forEach((heroe: HeroModel) => {
                                    heroe._id = idTemporal;
                                    idTemporal = idTemporal + 1;   
                                });
                                return this.heroes;
                            })
                        );
    }

    getHeroById(heroes: HeroModel[], heroeId: string) {
        return _.find(heroes, hero => hero._id == heroeId);
    }
}