import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  data: any;
  dataSubs: any;

  logo = './assets/icons/LogoQuadriFondoBlanco.png';

  constructor(
    private api: ApiService
  ) { }

  getStaticData() {
    this.dataSubs = this.api.getObject('quadri');
    return new Promise( (resolve, reject) => {
      this.dataSubs.subscribe( data => {
        this.data = data;
        console.log('static data available');
        resolve(this.data);
      });
    });
  }
}
