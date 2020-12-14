import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { HeroesService } from '../../../core/services/heroes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import * as HeroActions from '../../../store/hero.actions';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-heroe-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

    form: FormGroup;
    heroId: string;
    heroes: HeroModel[] = [];
    hero: HeroModel;
    starIcon = faStar;

    constructor(private route: ActivatedRoute,
                private heroesService: HeroesService,
                private store: Store<AppState>,
                private router: Router) {
        this.createForm();
    }

    ngOnInit(): void{
        this.heroId = this.route.snapshot.paramMap.get('id');
        this.store.select('heroState').subscribe(data => {
            this.heroes = data.heroes;
            this.hero = this.heroesService.getHeroById(this.heroes,this.heroId);
            this.form.reset(this.hero);
        });
    }

    createForm(){
        this.form = new FormGroup({
            _nickname: new FormControl('', [Validators.required]),
            _name: new FormControl('', [Validators.required]),
            _height: new FormControl('', [Validators.required])
        });
    }

    editHero(){
        if (this.form.valid){
            this.hero = {...this.hero, ...this.form.value};
            this.store.dispatch(new HeroActions.EditHero(this.hero));
            this.router.navigate(['/heroes']);
        }
    }
}