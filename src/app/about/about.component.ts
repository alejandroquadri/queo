import { Component, OnInit } from '@angular/core';
import { StaticService } from '../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;

  constructor(
    private staticData: StaticService
  ) { }

  ngOnInit() {
    this.data = this.staticData.data.about;
  }

}
