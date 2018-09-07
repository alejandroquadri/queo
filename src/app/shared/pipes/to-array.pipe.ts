import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(obj: any, args: any[] = null): any {
    const list = [];
    const listKeys = Object.keys(obj);
    listKeys.forEach( (key: any) => {
      const form = obj[key];
      form['$key'] = key;
      list.push(form);
    });
    return list;
  }
}
