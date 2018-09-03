import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { StaticService } from '../../shared';

@Component({
  selector: 'app-prod-menu',
  templateUrl: './prod-menu.component.html',
  styleUrls: ['./prod-menu.component.scss']
})
export class ProdMenuComponent implements OnInit {

  products: any;
  collections: Array<any>;
  ambients: any;
  featured: any;
  doc: any;

  constructor(
    private router: Router,
    private staticData: StaticService,
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
  }

  ngOnInit() {
    this.collections = this.staticData.data.collections;
    this.ambients = this.staticData.data.ambients;
  }

  scrollCol(collection) {
    console.log(collection);
    const el = this.doc.getElementById(collection);
    el.scrollIntoView({ block: 'start', inline: 'nearest',  behavior: 'smooth' });
  }

  routeTo(prod) {
    this.router.navigate([`/productos/${prod}`]);
  }

}
