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
    let mi:number = value % 1000;
    let s:number = Math.floor( value/1000 );
    let m:number = Math.floor( s/60 )
    let h:number = Math.floor( m/60 );
    let result:string;
    if(h > 0){
      result = `${h}:${m}:${s}:${mi}`;
    }else{
      result = `${m}:${s}:${mi}`;
    }
    return result;
  }
}
