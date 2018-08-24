import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  data: any;
  dataSubs: any;

  mesa = './assets/icons/mesaBlanco.png';
  paredExt = './assets/icons/paredExtBlanco.png';
  paredInt = './assets/icons/paredIntBlanco.png';
  pisoInt = './assets/icons/pisoIntBlanco.png';
  pisoExt = './assets/icons/pisoExtBlanco.png';
  logo = './assets/icons/LogoQuadriFondoBlanco.png';

  constructor(
    private api: ApiService
  ) { }

  // getStaticData2(): Promise<any> {
  //   return new Promise( (resolve, reject) => {
  //     this.api.getObjectOnce('quadri')
  //     .then( ret => {
  //       this.data = ret.val();
  //       console.log('static data available', this.data);
  //       resolve(this.data);
  //     })
  //     .catch( err => {
  //       reject( err );
  //     });
  //   });
  // }

  getStaticData() {
    this.dataSubs = this.api.getObject('quadri');
    return new Promise( (resolve, reject) => {
      this.dataSubs.subscribe( data => {
        this.data = data;
        console.log('static data available', this.data);
        resolve(this.data);
      });
    });
  }
}
