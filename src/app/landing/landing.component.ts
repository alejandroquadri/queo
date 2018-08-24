import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { StaticService } from '../shared';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  carrousel = true;
  data: any;
  images: any;
  doc: any;

  carouselInner: any;
  carouselItems: any;
  active: any;

  slidesData: any;
  slidesArray: Array<any>;

  // @ViewChild('slide1') slide1;

  constructor(
    private staticData: StaticService,
    private router: Router,
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
    this.data = this.staticData.data.landing;
    this.images = this.staticData.data.projectImgs;

    this.slidesData = this.staticData.data.landing.slides;
    this.slidesArray = Object.keys(this.slidesData);
  }

  ngOnInit() {

    // !! el codigo de abajo sirve para cambiar el css para que el carousel quede fullscreen
    if (this.carrousel) {
      setTimeout( () => {
        // this.carouselInner = document.getElementsByClassName('carousel-inner');
        this.carouselInner = this.doc.getElementsByClassName('carousel-inner');
        this.carouselInner[0].style.cssText = `
            height: 100%;
        `;
        this.changeCSS();
      }, 50);
    }
  }

  // esta funcion es para que el carousel quede full screen
  cambio(event) {
    // console.log('slide', event, this.slide1);
    this.changeCSS();
  }

  // esta funcion es para que el carousel quede full screen
  changeCSS() {
    setTimeout( () => {
      this.carouselItems = this.doc.querySelectorAll('.carousel-item');
      for (let i = 0; i < this.carouselItems.length; i++) {
        this.carouselItems[i].style.display = 'none';
      }
      this.active = this.doc.querySelectorAll('.carousel-item.active');

      this.active[0].style.height = '100%';
      this.active[0].style.display = 'flex';
    }, 50);
  }

  toProducts() {
    this.router.navigate(['/']);
  }

  more() {
    this.router.navigate(['/']);
  }

}
