import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../../store/hero.actions';
import { AppState } from '../../../store/app.reducers';
import { HeroesService } from '../../../core/services/heroes.service';
import { Subscription } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'app-search-heroes',
    templateUrl: './search-heroes.component.html',
    styleUrls: ['./search-heroes.component.scss']
})
export class SearchHeroesComponent implements OnInit {

    storedHeroes: HeroModel[] = [];
    heroesFound: HeroModel[] = [];
    searchParam: string;
    searchCriteriaObservablRef: Subscription = null;
    searchCriteria: string;


    constructor(private store: Store<AppState>,
                private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.searchCriteriaObservablRef = this.heroesService.searchCriteriaObservable$.subscribe(resp => this.searchCriteria = resp);

        this.store.select('heroState').subscribe(data => {
            this.storedHeroes = data.heroes;
            this.searchHeroes();
        });
    }

    searchHeroes(){
        this.activatedRoute.params.subscribe(params => {
            this.searchParam = params.param;
            if(this.searchCriteria === 'name'){
                this.heroesFound= this.heroesService.getHeroByName(this.storedHeroes, this.searchParam);
            }else{
                this.heroesFound= this.heroesService.getHeroByNickName(this.storedHeroes, this.searchParam);
            }      
        });
    }
}