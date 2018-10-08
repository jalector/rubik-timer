import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FromMillisPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'fromMillis',
})
export class FromMillisPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args):string {
    let mi:number = value % 1000,
        s:number = Math.floor( (value/1000)%60 ),
        m:number = Math.floor( (value/1000)/60 ),
        h:number = Math.floor( m/60 );

    return (h > 0)
      ? `${h}:${this.twoDigits( m )}:${this.twoDigits( s )}:${this.millisTwoDigits( mi )}`
      : `${m}:${this.twoDigits( s )}:${this.millisTwoDigits( mi )}`;
  }

  twoDigits ( value:number ):string {
      return (value.toString().length == 1)?'0' + value.toString():value.toString();
  }

  millisTwoDigits( value:number ):string {
    return ( value.toString().length == 1) 
          ? value.toString() + '0'
          : value.toString().slice(0, 2);
  }
}
