import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeroesService } from '../../../core/services/heroes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { HeroModel } from '../../../models/hero.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

    heroes: HeroModel[] = [];
    favoriteHero: HeroModel;
    heroId: number;
    favoriteHero$: Observable<string>;

    constructor(public translate: TranslateService,
                private heroesService: HeroesService,
                private store: Store<AppState>,) {
        translate.addLangs(['en', 'es']);
        translate.setDefaultLang('en');
    }
    
    ngOnInit(): void{
        this.favoriteHero$ = this.heroesService.favoriteHeroObservable$;
    }
}