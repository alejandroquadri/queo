import { Component } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ApiService } from './shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  date = moment().format('DD-MM-YY');
  items: Observable<any[]>;

  constructor(
    api: ApiService,
    router: Router
  ) {
    this.items = api.getList('products');
    console.log(api.saludo);
  }

}
