import { Pipe, PipeTransform } from '@angular/core';
/**
 * Transform ft to mts, and add mt add the end
 */
@Pipe({ name: 'heightFormat' })
export class HeightFormatPipe implements PipeTransform {
  transform(
    value: number,
  ): string {
    let formatValue = (value / 3.2808).toFixed(2).concat('mt');
    return formatValue;
  }
}
