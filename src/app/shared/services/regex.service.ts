import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  pwdRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!#%*?&]{8,}/;
  alphaRegex = /^[a-zA-z ]{1,}$/;
  numberRegex = /^[0-9]{10,10}$/;
  zipRegex = /^[0-9]{5,6}$/;

  constructor() { }

 getRegex() {
    return [this.emailRegex, this.pwdRegex, this.alphaRegex, this.numberRegex, this.zipRegex ];
  }

}
