import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{ map} from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: []
})
export class AddProductComponent implements OnInit {

  repos;



  constructor(private http:HttpClient) {
    
    const path ='https://api.github.com/search/repositories?q=angular'
    this.repos = http.get<any>(path).pipe(
      map(data => data.items)
    )


   }

  ngOnInit() {
  }



  loginUserData = {
    email: '',
    password: ''
  };



  signIn(newCourse: NgForm) {


  }

}
