import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  data: any;
  dataSubs: any;

  logo = './assets/icons/logoQueoBlancoLimpio.png';
  logoNegro = './assets/icons/logoQueoNegroLimpio.png';

  constructor(
    private api: ApiService
  ) { }

  getStaticData() {
    this.dataSubs = this.api.getObject('queo');
    return new Promise( (resolve, reject) => {
      this.dataSubs.subscribe( data => {
        this.data = data;
        console.log('static data available');
        resolve(this.data);
      });
    });
  }
}
