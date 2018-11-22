import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class GTagService {

  win: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(WINDOW) private window: Window,
  ) {
    this.win = window;
  }

  printDataLayer() {
    if (isPlatformBrowser(this.platformId)) {
      // console.log(this.win.dataLayer);
    }
  }

  pushObject(obj: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.win.dataLayer.push(obj);
    }
  }
}
