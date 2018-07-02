import { Component } from '@angular/core';
import * as moment from 'moment';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
    db: AngularFireDatabase
  ) {
    this.items = db.list('products').valueChanges();
  }

}
