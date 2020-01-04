import { Component, OnInit } from '@angular/core';


import { IProduct } from '../../IProduct';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styles: []
})
export class ListProductComponent implements OnInit {

  products: IProduct[];
  errorMsg;
  localObj;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {

   
   
    // this.localObj = [
    //   {title:'pro title 0'},
    //   {title:'pro title 1'}
    // ];
    
    // localStorage.setItem('myObj', JSON.stringify(this.localObj));
    // console.log('localStorage.setItem1', JSON.parse(localStorage.getItem('myObj')));

    // this.localObj[2] = {
    //   title:'pro title 2'
    // }

    // localStorage.setItem('myObj', JSON.stringify(this.localObj));
    // console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));


   


    this.productService.getAll('products')
      .subscribe(res => {
        this.products = res;
      },
        (error: Response) => {
          this.errorMsg = error;
        }
      );
  }

}
