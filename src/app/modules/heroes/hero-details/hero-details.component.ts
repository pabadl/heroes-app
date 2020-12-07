import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-heroe-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {

    form: FormGroup;

    constructor() {
        this.createForm();
    }

    createForm(){
        this.form = new FormGroup({
            nickname: new FormControl('aaa', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            height: new FormControl('', [Validators.required])
        });
    }

    editHero(){
        console.log(this.form);
        if (this.form.invalid){
            return Object.values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
    }
}