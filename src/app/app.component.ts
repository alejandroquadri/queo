import { Component } from '@angular/core';
import { StaticService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  images: any;
  imgArray: Array<any>;

  constructor(
    private staticData: StaticService
  ) {
    this.images = this.staticData.data.projectImgs;
    this.imgArray = Object.keys(this.images);
  }
}
