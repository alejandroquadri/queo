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
    @Inject(DOCUMENT) document
  ) {
    this.doc = document;
  }

  ngOnInit() {
    this.collections = this.staticData.data.collections;
  }

  scrollCol(collection) {
    const el = this.doc.getElementById(collection);
    el.scrollIntoView({ block: 'start', inline: 'nearest',  behavior: 'smooth' });
  }

  routeTo(col, prod) {
    this.router.navigate([`/productos/${col}/${prod}`]);
  }

}
