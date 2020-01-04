import { ViewcartComponent } from './component/viewcart/viewcart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './component/add-product/add-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';

const routes: Routes =
  [
   
          { path: "", component: ListProductComponent },
          { path: "viewcart", component: ViewcartComponent },
          { path: "add", component: AddProductComponent },
          { path: ":_id", component: ProductDetailComponent }
          
   
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
