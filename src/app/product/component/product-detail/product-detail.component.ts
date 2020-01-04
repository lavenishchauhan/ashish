import { IProduct } from './../../IProduct';
import { ISingleProduct } from './../../ISingleProduct';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  singleProduct = <ISingleProduct>{
    category: '',
    imgUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/fun_facts_fruits_and_vegetables_slideshow/thinkstock_rf_photo_of_variety_of_apples.jpg',
    price: '',
    title: '',
  }

  paramId;
  cartItem;
  imgthumbnail =
    [
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI36ghAwKyN2kiVS1nibwimneA222caJ8cM5eclWZ1hz094FI" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpfT6CQ1X1f0j0y53Zk_WRY85spN_pVYxhHLL1lnBdThwflNd" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJBFU46dwBC1cLwsGdKCeOWtM-Y61clfgxN7twjgLa23HS2NH" },
    ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
    this.activatedRoute.paramMap
      .subscribe(params => {
        this.paramId = params.get('_id');
        if (this.paramId) {
          this.singleProductDetail(this.paramId);
        }
        // console.log(this.paramId);
      });


    this.cartItem = JSON.parse(localStorage.getItem('myObj'));
    //console.log('this.cartItem', this.cartItem  );

  }

  ngOnInit() { }
  singleProductDetail(_id: string) {
    this.productService.getSingleProduct('products/' + _id)
      .subscribe(res => {
        this.singleProduct._id = res._id,
          this.singleProduct.title = res.title,
          this.singleProduct.price = res.price,
          this.singleProduct.imgUrl = res.imgUrl,
          this.singleProduct.category = res.category
      });
  }

  progallery(thumbImg) { this.singleProduct.imgUrl = thumbImg; }




  localObj = [];

  addtocart(cartProduct, quantity) {
    let objIndex;

    if (JSON.parse(localStorage.getItem('myObj'))) {
      objIndex = JSON.parse(localStorage.getItem('myObj')).length;
      this.localObj = JSON.parse(localStorage.getItem('myObj'));

      let changeObj: number = 0;

      for (let i = 0; objIndex > i; i++) {
        if (this.localObj[i]._id == cartProduct._id) {
          console.log('same Id', i);
          this.localObj[i].quantity = quantity.value;
          changeObj = 1;
        }
      }
      if (changeObj == 0) {
        console.log('diffrent Id with storege');
        this.localObj[objIndex] = {
          _id: cartProduct._id,
          title: cartProduct.title,
          price: cartProduct.price,
          imgUrl: cartProduct.imgUrl,
          category: cartProduct.category,
          quantity:  quantity.value

        }
      }
    }
    else {
      objIndex = 0;
      console.log('new Id without storege');
      this.localObj[objIndex] = {
        _id: cartProduct._id,
        title: cartProduct.title,
        price: cartProduct.price,
        imgUrl: cartProduct.imgUrl,
        category: cartProduct.category,
        quantity:  quantity.value
      }
    }


    //console.log("objIndex", objIndex);







    localStorage.setItem('myObj', JSON.stringify(this.localObj));
    console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));
  }




}
