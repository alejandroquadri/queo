import { Component } from '@angular/core';
import { StaticService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  data: any;

  constructor(
    private staticData: StaticService
  ) {
    this.staticData.getStaticData()
    .then( ret => {
      this.data = this.staticData.data;
    });
  }
}
