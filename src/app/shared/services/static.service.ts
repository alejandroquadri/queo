import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  data: any;

  constructor(
    private api: ApiService
  ) { }

  getStaticData(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.api.getObjectOnce('quadri')
      .then( ret => {
        this.data = ret.val();
        console.log('static data available', this.data);
        resolve(this.data);
      })
      .catch( err => {
        reject( err );
      });
    });
  }
}
