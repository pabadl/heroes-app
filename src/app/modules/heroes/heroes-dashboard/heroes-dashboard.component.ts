import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../core/services/heroes.service';
import { HeroModel } from '../../../models/hero.model';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../../store/hero.actions';
import { IHeroState } from '../../../store/hero.reducers';
import { AppState } from '../../../store/app.reducers';

@Component({
    selector: 'app-heroes-dashboard',
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit{

    heroes: HeroModel[] = [];
    error: any;

    constructor(private router: Router,
                private heroesService: HeroesService,
                private store: Store<AppState>) {}
    
    ngOnInit(): void {
        // if(this.heroes.length > 0){
        //     console.log('1');
        //     this.store.select('heroesState').subscribe(data => {
        //         this.heroes = data.heroes;
        //       }
        //     );
        // }else{
            //console.log('2');
            // this.heroesService.getHeroes().subscribe((resp: HeroModel[]) =>{
            //     this.heroes = resp;
            //     console.log(this.heroes);
            //     //this.store.dispatch(new HeroeActions.SetHeroes(this.heroes));
            // })
       // }
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