import { SeoService } from './../../shared/services/seo.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { StaticService } from '../../shared';

@Component({
  selector: 'app-prod-menu',
  templateUrl: './prod-menu.component.html',
  styleUrls: ['./prod-menu.component.scss']
})
export class ProdMenuComponent implements OnInit {

  products: any;
  collections$: any;
  collections: Array<any>;
  ambients: any;
  featured: any;
  doc: any;
  spinner = faSpinner;

  constructor(
    private router: Router,
    private staticData: StaticService,
    private seoService: SeoService,
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
  }

  ngOnInit() {
    this.collections = this.staticData.data.collections;

    const metaTags = {
      title: `Linea de productos | Queo`,
      // tslint:disable-next-line:max-line-length
      description: `Diseñamos objetos y muebles de terrazzo para sorprender. Fabricados con maxima dedicacion. Llevamos el estudio de los materiales a su mayor exponente`,
      image: this.staticData.data.landing.slides[0].img,
      slug: 'productos',
    };

    this.seoService.generateTags(metaTags);
  }

  scrollCol(collection) {
    const el = this.doc.getElementById(collection);
    el.scrollIntoView({ block: 'start', inline: 'nearest',  behavior: 'smooth' });
  }

  routeTo(col, prod) {
    this.router.navigate([`/productos/${col}/${prod}`]);
  }

}
