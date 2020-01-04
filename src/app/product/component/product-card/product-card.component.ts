import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { IProduct } from './../../IProduct';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: []
})
export class ProductCardComponent implements OnInit {
  @Input('product') product:IProduct[];
  localObj ;
 

  constructor() { 



  }
  ngOnInit() {
  }









}
