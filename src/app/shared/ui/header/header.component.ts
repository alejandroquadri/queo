import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { switchMap } from 'rxjs/operators';

import { StaticService } from '../../services';
import { WINDOW } from '../../services/window.service';

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
    private route: ActivatedRoute,
    public router: Router,
    public staticData: StaticService,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.win = window;
   }

  route$: any;

  isExpanded = false;
  logoBlanco: any;
  logoNegro: any;
  win: any;

  scrollValue: any;
  scrollDir = 'up';

  @HostListener('window:scroll', ['$event'])
    calcPosition(event) {
      if (isPlatformBrowser(this.platformId)) {
        const oldScrollValue = this.scrollValue;
        this.scrollValue = this.win.pageYOffset;
        if ((this.scrollValue <= oldScrollValue) || this.win.pageYOffset < 30) {
          this.scrollDir = 'up';
        } else {
          this.scrollDir = 'down';
        }
      }

      if (isPlatformServer(this.platformId)) {
        console.log('serverside');
      }
    }

  ngOnInit() {
    this.logoBlanco = this.staticData.logoBlanco;
    this.logoNegro = this.staticData.logoNegro;
  }

}
