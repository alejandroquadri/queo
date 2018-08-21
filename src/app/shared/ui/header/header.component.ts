import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticService } from '../../services/static.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public staticData: StaticService
  ) { }

  isExpanded = false;
  logo: any;

  ngOnInit() {
    this.logo = this.staticData.logo;
  }

}
