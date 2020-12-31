import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../../store/hero.actions';
import { AppState } from '../../../store/app.reducers';
import { HeroesService } from '../../../core/services/heroes.service';

@Component({
    selector: 'app-heroes-dashboard',
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit{

    heroes: HeroModel[] = [];
    error: any;

    constructor(private router: Router,
                private store: Store<AppState>,
                private heroService: HeroesService) {}
    
    ngOnInit(): void {
        this.store.select('heroState').subscribe(data => {
            this.heroes = data.heroes;
            this.error = data.error;
        });
        if (!this.heroes){
            this.store.dispatch(new HeroActions.LoadHeroes());
        }      
    }
    
    redirectToHeroDetails(heroeId: number){
        this.router.navigate(['heroes', heroeId, 'details']);
    }
}