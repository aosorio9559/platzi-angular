import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): unknown {
    if (isNaN(value)) {
      return 0;
    }
    return Math.pow(value, 2);
  }

}
