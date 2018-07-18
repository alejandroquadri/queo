import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StaticService } from '../shared';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  data: any;

  constructor(
    private staticData: StaticService,
    private router: Router
  ) {
    this.data = this.staticData.data;
  }

  ngOnInit() {
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
