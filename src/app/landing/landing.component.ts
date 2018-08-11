import { StepsComponent } from '../shared/components/steps/steps.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StaticService } from '../shared';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { StepsComponent } from '../shared';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // items: Observable<any[]>;
  carrousel = true;
  data: any;

  carouselInner: any;
  carouselItems: any;
  active: any;
  @ViewChild('slide1') slide1;

  constructor(
    private staticData: StaticService,
    private router: Router
  ) {
    this.data = this.staticData.data.ambients;
  }

  ngOnInit() {

    // !! el codigo de abajo sirve para cambiar el css para que el carousel quede fullscreen
    if (this.carrousel) {
      setTimeout( () => {
        this.carouselInner = document.getElementsByClassName('carousel-inner');
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
      this.carouselItems = document.querySelectorAll('.carousel-item');
      for (let i = 0; i < this.carouselItems.length; i++) {
        this.carouselItems[i].style.display = 'none';
      }
      this.active = document.querySelectorAll('.carousel-item.active');

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
