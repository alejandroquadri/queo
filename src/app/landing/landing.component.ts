import { Component, OnInit } from '@angular/core';
import { StaticService } from '../shared';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // items: Observable<any[]>;
  data: any;

  carouselInner: any;
  carouselItems: any;
  active: any;

  constructor(
    private staticData: StaticService
  ) {
    this.data = this.staticData.data.ambients;
  }

  ngOnInit() {

    // this.items = this.api.getList('products');

    //  !! el codigo de abajo sirve para cambiar el css para que el carousel quede fullscreen
    // this.carouselInner = document.getElementsByClassName('carousel-inner');
    // this.carouselInner[0].style.cssText = `
    //     height: 100%;
    // `;
    // this.changeCSS();
  }

  // esta funcion es para que el carousel quede full screen
  // changeCSS() {
  //   setTimeout( () => {
  //     this.carouselItems = document.querySelectorAll('.carousel-item');
  //     for (let i = 0; i < this.carouselItems.length; i++) {
  //       this.carouselItems[i].style.display = 'none';
  //     }
  //     this.active = document.querySelectorAll('.carousel-item.active');

  //     this.active[0].style.height = '100%';
  //     this.active[0].style.display = 'flex';
  //   }, 50);
  // }

}
