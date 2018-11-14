import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { StaticService, SeoService, WINDOW, GTagService } from '../shared';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  logoBlanco: any;
  carrousel = true;
  videoBg = false;
  imgFs = false;
  data: any;
  images: any;
  doc: any;
  win: any;

  carouselInner: any;
  carouselItems: any;
  active: any;

  slidesData: any;
  slidesArray: Array<any>;

  // @ViewChild('slide1') slide1;
  // tslint:disable-next-line:max-line-length
  videoWebm = 'https://firebasestorage.googleapis.com/v0/b/livelinks-62c79.appspot.com/o/products%2Fprueba.webm?alt=media&token=d12839ad-798e-43ff-a32d-bc04f415d4da';
  // tslint:disable-next-line:max-line-length
  videoMp4 = 'https://firebasestorage.googleapis.com/v0/b/livelinks-62c79.appspot.com/o/products%2Fprueba.mp4?alt=media&token=c4e6153c-c13a-4578-8ef9-2b9599486549';

  @ViewChild('terrazzo') terrazzo: ElementRef;

  constructor(
    private staticData: StaticService,
    private router: Router,
    @Inject(DOCUMENT) document,
    // @Inject(WINDOW) private window: Window,
    private seoService: SeoService,
    private gTagSrv: GTagService
  ) {
    this.doc = document;
    // this.data = this.staticData.data.landing;
    // this.images = this.staticData.data.projectImgs;

    this.gTagSrv.pushObject({
      event: 'prueba',
      estado: 'frustracion'
    });
    this.gTagSrv.printDataLayer();

    this.slidesData = this.staticData.data.landing.slides;
    this.slidesArray = Object.keys(this.slidesData);
    this.logoBlanco = this.staticData.logoBlanco;
  }

  ngOnInit() {

    const metaTags = {
      title: 'Diseño de objetos y muebles únicos en terrazzo | Queo',
      // tslint:disable-next-line:max-line-length
      description: 'En Queo diseñamos y fabricamos objetos y muebles únicos con terrazzo para las mas variadas aplicaciones de diseño y arquitectura.',
      image: this.slidesData[0].img,
      slug: '',
    };

    this.seoService.generateTags(metaTags);

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
    this.router.navigate(['/productos']);
  }

  more() {
    this.terrazzo.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest',  behavior: 'smooth' });
  }

}
