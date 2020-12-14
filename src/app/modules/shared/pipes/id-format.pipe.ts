import { Pipe, PipeTransform } from '@angular/core';

/**
    * st is used with numbers ending in 1 (e.g. 1st, pronounced first)
    * nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
    * rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
    * As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
    * th is used for all other numbers (e.g. 9th, pronounced ninth).
 */
@Pipe({ name: 'idFormat' })
export class IdFormatPipe implements PipeTransform {
  transform(
    value: number,
  ): string {
    let modulus1 = value % 10;
    let modulus2 = value % 100;
    if (modulus1 == 1 && modulus2 != 11) {
        return value + "st";
    }
    if (modulus1 == 2 && modulus2 != 12) {
        return value + "nd";
    }
    if (modulus1 == 3 && modulus2 != 13) {
        return value + "rd";
    }
    return value + "th";
  }
}
