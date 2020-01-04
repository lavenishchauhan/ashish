import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthService {
  url: string = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  login(endpoint, resource) {
    return this.http.post(
      this.url + endpoint, JSON.stringify(resource),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }
    ).pipe(map((response) => {
      const result: any = response;
      if (result && result.token) {
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('myObj');
  }
  isLoggedIn() {
      return  tokenNotExpired();
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const jwtHelper = new JwtHelper();

    if (jwtHelper.decodeToken(token)) {
      const isAdmin = jwtHelper.decodeToken(token);
      return isAdmin.tokenpro.admin;
    } else {
      return null ;
    }
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

}

