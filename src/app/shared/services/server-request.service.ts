import { environment } from '../../../environments/environment';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServerRequestService extends DataService {


// private local = 'http://localhost:3000/api/';
// private server = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super(environment.ApiUrl, http);
  }
}
