import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    // console.log(Object.keys(value))
    return Object.keys(value); // .map(key => value[key])
  }
}
