import { Component, OnInit } from '@angular/core';
import { StaticService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terrazzo',
  templateUrl: './terrazzo.component.html',
  styleUrls: ['./terrazzo.component.scss']
})
export class TerrazzoComponent implements OnInit {

  data: any;

  constructor(
    private staticData: StaticService,
    public router: Router
  ) { }

  ngOnInit() {
    this.data = this.staticData.data.components.terrazzo;
  }

}
