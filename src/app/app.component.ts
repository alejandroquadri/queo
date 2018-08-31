import { Component } from '@angular/core';
import { StaticService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private staticData: StaticService
  ) {
  }
}
