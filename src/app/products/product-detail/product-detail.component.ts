import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StaticService } from '../../shared';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  prod: any;
  model: any;
  modelData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staticData: StaticService
  ) { }

  ngOnInit() {
    this.prod = this.route.snapshot.paramMap.getAll('id')[0];
    this.model = this.route.snapshot.paramMap.getAll('prod')[0];
    this.modelData = this.staticData.data.products.collections[this.prod].models[this.model];
    console.log(this.prod, this.model, this.modelData);
  }

}
