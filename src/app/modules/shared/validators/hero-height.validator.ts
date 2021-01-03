import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })
  export class HeroHeightValidators {

    heightNumber(control: FormControl): {[s:string]: boolean}{
        if(isNaN(Number(control.value))){
            return{
                heightNumber: true
            }
        }
        return null;
    }
}