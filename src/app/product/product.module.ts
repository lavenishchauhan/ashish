import { ProductService } from '../shared/services/product.service';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ViewcartComponent } from './component/viewcart/viewcart.component';

@NgModule({
  declarations: [ ListProductComponent, AddProductComponent, ProductCardComponent,ProductCardComponent, ProductDetailComponent, ViewcartComponent],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  exports:[
    AddProductComponent
  ],
  providers: [ProductService],
})
export class ProductModule { }
