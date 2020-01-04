import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegexService } from 'src/app/shared/services/regex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  regex;  /*Var Regex*/
  isLogin
  loginUserData = {
    email: '',
    password: ''
  };


  constructor(
    private regexService: RegexService, 
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,){
    this.regex = {
      alpha: regexService.alphaRegex, email: regexService.emailRegex, pwd: regexService.pwdRegex,
      number: regexService.numberRegex, zip: regexService.zipRegex
    };
   }

  ngOnInit() {}

  loginIn(newCourse: NgForm) {
    console.log(this.loginUserData);
    this.authService.login('auth', this.loginUserData)
    .subscribe(res => {
      if (res) {
        newCourse.reset();
        this.isLogin = this.authService.isLoggedIn();
        const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || './product']);
      } else {
      // this.invalidLogin = true;
      }
    }, (error) => {
          console.log(error);
          newCourse.reset();
    });
  }

}
