import { Component } from '@angular/core';
import { StaticService } from './shared';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  data: any;
  faSpinner = faSpinner;

  constructor(
    private staticData: StaticService
  ) {
    this.staticData.getStaticData()
    .then( ret => {
      this.data = this.staticData.data;
    });
  }
}
