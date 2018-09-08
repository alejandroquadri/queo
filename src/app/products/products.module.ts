import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProdMenuComponent } from './prod-menu/prod-menu.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule, BuyModalComponent } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    BuyModalComponent,
  ],
  declarations: [
    ProdMenuComponent,
    ProductComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
