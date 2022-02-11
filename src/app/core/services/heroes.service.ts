import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, timeout, delay, concatMap } from 'rxjs/operators';
import { HeroModel } from "../../models/hero.model";
import * as _ from 'lodash';
import { of, BehaviorSubject } from "rxjs";
import { HEROES_POWERS } from "../../modules/shared/constants/heroes-powers.constants";

@Injectable()
export class HeroesService {
    private url = 'https://udem.herokuapp.com/heroes';

    heroes: HeroModel[] = [];

    private favoriteHero: BehaviorSubject<string> = new BehaviorSubject('');
    public favoriteHeroObservable$ = this.favoriteHero.asObservable();
    private searchCriteria: BehaviorSubject<string> = new BehaviorSubject('');
    public searchCriteriaObservable$ = this.searchCriteria.asObservable();

    constructor(private http: HttpClient) {}

    setFavoriteHeroObservable(heroName: string){
        this.favoriteHero.next(heroName);
    }

    setSearchCriteriaObservable(param: string){
        this.searchCriteria.next(param);
    }

    getHeroes() {
        return this.getHeroesPowers().pipe(
            concatMap(powers => {
                return this.http.get(this.url)
                        .pipe(
                            map((resp:HeroModel[]) => {
                                this.heroes = resp;                           
                                this.heroes.forEach((hero: HeroModel) => {
                                    let power = _.find(powers, power => power.heroId == hero._id);
                                    (power !== undefined) ? hero._power = power.power : hero._power = 'NA';                      
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

    getHeroByName(heroes: HeroModel[], param: string){
        return _.filter(heroes, (hero:HeroModel) => hero._name.toLowerCase().includes(param.toLowerCase()));
    }

    getHeroByNickName(heroes: HeroModel[], param: string){
        return _.filter(heroes, (hero:HeroModel) => hero._nickname.toLowerCase().includes(param.toLowerCase()));
    }

    getHeroesPowers(){
        return of(HEROES_POWERS).pipe(
            delay(1000)
        );
    }
}