import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StaticService } from '../../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: any;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staticData: StaticService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.getAll('id');
    this.product = this.staticData.data.products[this.id];
    console.log(this.product.applications);
  }

}
