import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../core/services/heroes.service';
import { HeroeModel } from '../../../models/heroe.model';

@Component({
    selector: 'app-heroes-dashboard',
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent implements OnInit{

    heroes: HeroeModel[] = [];

    constructor(private router: Router,
                private heroesService: HeroesService) {}
    
    ngOnInit(): void {
        this.heroesService.getHeroes().subscribe((resp: HeroeModel[]) =>{
            this.heroes = resp;
            console.log(this.heroes);
        })
    }
    
    redirectToHeroeDetails(heroeId: number){
        this.router.navigate(['heroes', heroeId, 'details'])
    }
}