import { ISingleProduct } from './../../product/ISingleProduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IProduct } from '../../product/IProduct';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url: string = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  //======== Get All  Product =================================
  getAll(endpoint): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url + endpoint)
      .pipe(
        catchError(this.handleError)
      )
  }



  //======== Get All  Product =================================
  getSingleProduct(endpoint): Observable<ISingleProduct> {
    return this.http.get<ISingleProduct>(this.url + endpoint)
      .pipe(
        catchError(this.handleError)
      )
  }




  buyItem() {
    return JSON.parse(localStorage.getItem('myObj'));
  }

  totalCartPrice() {

   let totalprice:number = 0;
      let totalCartPrice = JSON.parse(localStorage.getItem('myObj'));
      let sum: number = 0;
      if (totalCartPrice) {
        for (let i = 0; totalCartPrice.length > i; i++) {
         totalprice += parseInt(totalCartPrice[i].price) *  parseInt(totalCartPrice[i].quantity) ;
        }
      }
  return totalprice;

  }


  handleError(error: HttpErrorResponse) {
    alert(error.message);
    return throwError(error.message);
  }


}



