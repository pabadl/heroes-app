import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../core/services/heroes.service';
import { HeroeModel } from '../../../models/heroe.model';
import { Store } from '@ngrx/store';
import * as HeroeActions from './../../../store/heroe.actions';
import { IHeroesState } from '../../../store/heroe.reducers';
import { AppState } from '../../../store/app.reducers';

@Component({
    selector: 'app-heroes-dashboard',
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit{

    heroes: HeroeModel[] = [];

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
            this.heroesService.getHeroes().subscribe((resp: HeroeModel[]) =>{
                this.heroes = resp;
                console.log(this.heroes);
                //this.store.dispatch(new HeroeActions.SetHeroes(this.heroes));
            })
       // }       
    }
    
    redirectToHeroeDetails(heroeId: number){
        this.router.navigate(['heroes', heroeId, 'details']);
    }
}