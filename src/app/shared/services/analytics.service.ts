import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  trackRouter() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
    }
  }

  sendEvent(category?, label?, action?, value?) {
    if (isPlatformBrowser(this.platformId)) {
      (<any>window).ga('send', 'event', {
        eventCategory: category || 'eventCategory',
        eventLabel: label || 'eventLabel',
        eventAction: action || 'eventAction',
        eventValue: value || 10
      });
    }
  }
}
