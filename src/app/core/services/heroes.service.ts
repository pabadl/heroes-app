import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { HeroeModel } from "../../models/heroe.model";

@Injectable()
export class HeroesService {
    private url = 'https://udem.herokuapp.com/heroes';

    heroes: HeroeModel[] = [];

    constructor(private http: HttpClient) {}

    getHeroes() {
        let idTemporal = 1;
        return this.http.get(this.url)
                        .pipe(
                            map((resp:HeroeModel[]) => {
                                this.heroes = resp;                           
                                this.heroes.forEach((heroe: HeroeModel) => {
                                    heroe._id = idTemporal;
                                    idTemporal = idTemporal + 1;   
                                });
                                return this.heroes;
                            })
                        );
    }
}