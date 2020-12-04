import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../core/services/heroes.service';

@Component({
    selector: 'app-heroes-dashboard',
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent {

    constructor(private router: Router,
                private heroesService: HeroesService) {}
    
    redirectToHeroeDetails(heroeId: number){
        this.heroesService.getHeroes().subscribe(resp =>{
            console.log(resp);
        })
        this.router.navigate(['heroes', heroeId, 'details'])
    }
}