import { Component, Inject, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './shared/services/window.service';
import { AnalyticsService } from './shared/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  doc: any;
  win: any;
  load = true;

  constructor(
    private analyticsS: AnalyticsService,
    @Inject(DOCUMENT) document,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.doc = document;
    this.win = window;
    this.getVH();
    this.analyticsS.trackRouter();
  }

  @HostListener('window:resize', ['$event'])
    resize(event) {
      this.getVH();
    }

  getVH() {
    if (isPlatformBrowser(this.platformId)) {

      if (!(this.win.innerWidth < 540 && this.load === false) ) {
        const vh = this.win.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
        this.doc.documentElement.style.setProperty('--vh', `${vh}px`);
        this.load = false;
      }
    }

    if (isPlatformServer(this.platformId)) {
      console.log('serverside');
    }
  }

}
