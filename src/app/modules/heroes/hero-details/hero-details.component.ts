import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroModel } from '../../../models/hero.model';
import { HeroesService } from '../../../core/services/heroes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import * as HeroActions from '../../../store/hero.actions';
import { HeroNameValidators } from '../../shared/validators/hero-name.validator';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HeroHeightValidators } from '../../shared/validators/hero-height.validator';

@Component({
    selector: 'app-heroe-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

    starIcon = faStar;
    form: FormGroup;
    heroId: string;
    heroes: HeroModel[] = [];
    hero: HeroModel;
    favoriteHero = false;
    favoriteHeroId;

    constructor(private route: ActivatedRoute,
                private heroesService: HeroesService,
                private store: Store<AppState>,
                private router: Router,
                private heroNamevalidators: HeroNameValidators,
                private heroHeightvalidators: HeroHeightValidators) {}

    ngOnInit(): void{
        this.createForm();
        this.heroId = this.route.snapshot.paramMap.get('id');
        this.store.select('heroState').subscribe(data => {
            this.heroes = data.heroes;
            if (data.favoriteHero && this.heroId === data.favoriteHero.toString()) this.favoriteHero = true;
            this.hero = this.heroesService.getHeroById(this.heroes,this.heroId);
            this.form.reset(this.hero);
        });
        if (!this.heroes){
            this.store.dispatch(new HeroActions.LoadHeroes());
        }   
    }

    createForm(){
        this.form = new FormGroup({
            _nickname: new FormControl('', [Validators.required]),
            _name: new FormControl('', [Validators.required], this.heroNamevalidators.nameValidator()),
            _height: new FormControl('', [Validators.required, this.heroHeightvalidators.heightNumber]),
            _rating: new FormControl('', [Validators.required]),
            _power: new FormControl('', [Validators.required]),
        });
    }

    formControlIsInvalid(formControlName: string){
        return this.form.get(formControlName).invalid && this.form.get(formControlName).touched;
    }

    editHero(){
        if (this.form.invalid){
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        
        this.hero = {...this.hero, ...this.form.value};
        this.store.dispatch(new HeroActions.EditHero(this.hero));
        if(this.favoriteHero){
            this.store.dispatch(new HeroActions.SetFavoriteHero(this.hero._id));
            this.heroesService.setFavoriteHeroObservable(this.hero._nickname);
        }
        this.router.navigate(['/heroes']);
    }
}