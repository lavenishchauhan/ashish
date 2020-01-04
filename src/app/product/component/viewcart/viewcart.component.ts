import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styles: []
})

export class ViewcartComponent implements OnInit {

  totalprice:number = 0;

  constructor(private productService: ProductService) { 
    //this.totalCartPrice();
  }

  ngOnInit() {}

  // totalCartPrice() {
  //   let totalCartPrice = JSON.parse(localStorage.getItem('myObj'));
  //   let sum: number = 0;
  //   if (totalCartPrice) {
  //     for (let i = 0; totalCartPrice.length > i; i++) {
  //       this.totalprice += parseInt(totalCartPrice[i].price) *  parseInt(totalCartPrice[i].quantity) ;
  //     }
  //   }
  // }




  localObj = [];

  addtocart(num, quantity) 
  {
    this.localObj = JSON.parse(localStorage.getItem('myObj'));
    this.localObj[num].quantity = quantity.value;
  
    localStorage.setItem('myObj', JSON.stringify(this.localObj));
    console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));
 
  }










}
