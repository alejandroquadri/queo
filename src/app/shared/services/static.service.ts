import { Injectable } from '@angular/core';
import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { ApiService } from './api.service';

// The state saved from the server render
const DATA_KEY = makeStateKey<any>('queo');

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  data: any;
  data$: any;

  logoBlancoLimpio = './assets/icons/logoQueoBlancoLimpio.png';
  logoNegroLimpio = './assets/icons/logoQueoNegroLimpio.png';
  logoBlancoPlus = './assets/icons/logoQueoBlanco+.png';
  logoNegroPlus = './assets/icons/logoQueoNegro+.png';
  logoBlanco = './assets/icons/Queo-quadri-dark-tp.png';
  logoNegro = './assets/icons/Queo-quadri-light-tp.png';

  constructor(
    private api: ApiService,
    private state: TransferState
  ) { }

  getStaticData() {
    return new Promise( (resolve, reject) => {
      const exists = this.state.get(DATA_KEY, {} as any);
      this.data$ = this.api.getObject('queo')
      .pipe(
        tap(obj => {
          this.state.set(DATA_KEY, obj);
        }),
        startWith(exists)
        )
        .subscribe( data => {
        this.data = data;
        if (!(Object.keys(this.data).length === 0 && this.data.constructor === Object)) {
          resolve();
        }
      });
    });
  }

}
