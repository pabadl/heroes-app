import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeroesService } from '../../../core/services/heroes.service';
import { HeroModel } from '../../../models/hero.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as _ from 'lodash';

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
    searchCriteria = 'name';

    constructor(public translate: TranslateService,
                private heroesService: HeroesService,
                private router: Router) {
        translate.addLangs(['en', 'es']);
        translate.setDefaultLang('en');
    }
    
    ngOnInit(): void{
        this.favoriteHero$ = this.heroesService.favoriteHeroObservable$;
    }

    searchHero(searchTerm){
        this.heroesService.setSearchCriteriaObservable(this.searchCriteria);
        let searchValue = searchTerm.target.value;
        if(searchValue.length > 2 || searchValue.length === 0 ) this.router.navigate(['heroes/search', searchTerm.target.value])
    }
}