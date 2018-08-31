import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { StaticService } from '../../services/static.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('in', [
      state('down', style({
        visibility: 'hidden',
        opacity: 0
      })),
      state('up',   style({
        visibility: 'visible',
        opacity: 1
      })),
      transition('up <=> down', animate('2s ease-out')),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public staticData: StaticService
  ) { }

  isExpanded = false;
  logoBlanco: any;
  logoNegro: any;

  scrollValue: any;
  scrollDir = 'up';

  @HostListener('window:scroll', ['$event'])
    doSomething(event) {
      const oldScrollValue = this.scrollValue;
      this.scrollValue = window.pageYOffset;
      if (this.scrollValue <= oldScrollValue) {
        this.scrollDir = 'up';
      } else {
        this.scrollDir = 'down';
      }
    }

  ngOnInit() {
    this.logoBlanco = this.staticData.logoBlanco;
    this.logoNegro = this.staticData.logoNegro;
  }

}
