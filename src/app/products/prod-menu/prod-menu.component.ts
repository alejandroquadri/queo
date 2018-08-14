import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StaticService } from '../../shared';

@Component({
  selector: 'app-prod-menu',
  templateUrl: './prod-menu.component.html',
  styleUrls: ['./prod-menu.component.scss']
})
export class ProdMenuComponent implements OnInit {

  products: any;
  productsArray: Array<any>;
  ambients: any;

  constructor(
    private router: Router,
    private staticData: StaticService
  ) { }

  ngOnInit() {
    this.products = this.staticData.data.products;
    this.productsArray = Object.keys(this.products);
    this.ambients = this.staticData.data.ambients;
  }

  routeTo(prod) {
    this.router.navigate([`/productos/${prod}`]);
  }

}
