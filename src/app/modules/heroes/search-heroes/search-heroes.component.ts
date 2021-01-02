import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../../store/hero.actions';
import { AppState } from '../../../store/app.reducers';
import { HeroesService } from '../../../core/services/heroes.service';

@Component({
    selector: 'app-search-heroes',
    templateUrl: './search-heroes.component.html',
    styleUrls: ['./search-heroes.component.scss']
})
export class SearchHeroesComponent implements OnInit {

    storedHeroes: HeroModel[] = [];
    heroesFound: HeroModel[] = [];
    searchParam: string;

    constructor(private store: Store<AppState>,
                private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.store.select('heroState').subscribe(data => {
            this.storedHeroes = data.heroes;
            this.searchHeroes();
        });
    }

    searchHeroes(){
        this.activatedRoute.params.subscribe(params => {
            this.searchParam = params.param;
            this.heroesFound= this.heroesService.getHeroByName(this.storedHeroes, this.searchParam);
        });
    }
}