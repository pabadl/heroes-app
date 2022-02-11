import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { Store } from '@ngrx/store';
import * as HeroActions from '../../../store/hero.actions';
import { AppState } from '../../../store/app.reducers';
import { HeroesService } from '../../../core/services/heroes.service';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit{

    @Input() hero: HeroModel;

    constructor(private router: Router) {}
    
    ngOnInit(): void {     
    }
    
    redirectToHeroDetails(heroeId: number){
        this.router.navigate(['heroes', heroeId, 'details']);
    }
}