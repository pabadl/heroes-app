import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-hero-rating',
    templateUrl: './hero-rating.component.html',
    styleUrls: ['./hero-rating.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => HeroRatingComponent),
          multi: true
        }
      ]
})
export class HeroRatingComponent implements OnInit , ControlValueAccessor {

    starIcon = faStar;
    value: string;
    isDisabled: boolean;
    onChange = (_:any) => { }
    onTouch = () => { }

    ngOnInit(): void{
    }

    rateHero(value){
        console.log(value);
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
    }
    
    writeValue(value: any): void {
        if (value) {
            this.value = value;
        } else {
            this.value = '';
        }
    }
  
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void { 
        this.onTouch = fn;
    }
  
    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}