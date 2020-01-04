import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export class DataService {
  constructor(private url: string, private http: HttpClient) {
  }
  pricingPlansService(endpoint) {
    return this.http.get(endpoint,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
      'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
      }),
  })
    .pipe(
      catchError(this.handleError)
    )
  }
  createCustomerService(endpoint, resource) {
    console.log(resource);
    return this.http.post(endpoint, resource, {
      headers: new HttpHeaders({
        'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
        'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
        }),
      })
      .pipe(
        catchError(this.handleError)
      )
  }
  vaultCard(endpoint, resource) {
    console.log(resource);
    return this.http.post(endpoint, resource, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
        'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
        }),
      })
      .pipe(
        catchError(this.handleError)
      )
  }

SubscriptionsPlan(endpoint, resource) {
  return this.http.post(endpoint, resource, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
          'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
        }),
    })
    .pipe(
      catchError(this.handleError)
    )
}
 invoices(endpoint) {
    return this.http.get(endpoint,{
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
      'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
      }),
  })
    .pipe(
      catchError(this.handleError)
    )
  }
  create2(endpoint, resource) {
    return this.http.post(endpoint, resource, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJraWQiOiIzd0dCZkhqcG9jMzM5WElXVzhkQmw5SE5aNnpqTXhmQTFlam9OUEpXYk80IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjV2YVd6VnJPdWxpZFBTcUktMGZqbXdDNF8ySDRmOVBLMWlpUVhTc3ZVRDAuQUJkNUZ1SEhwTkJ0TXpvQW5qOGZRL0huY0pSZ2JoelY3QzljdUlLeGx4UT0iLCJpc3MiOiJodHRwczovL2V6eXBheS5va3RhcHJldmlldy5jb20vb2F1dGgyL2F1c2k4aHJ5ajg1a21hSnlJMGg3IiwiYXVkIjoiZXp5cGF5IiwiaWF0IjoxNTY5MTM3ODQ4LCJleHAiOjE1NjkxNDE3NDgsImNpZCI6IjBvYW1naGF5bnU5MG9oN1pnMGg3IiwidWlkIjoiMDB1bWhwZGRrYmxDSzE2WFcwaDciLCJzY3AiOlsiaW50ZWdyYXRvciIsIm9mZmxpbmVfYWNjZXNzIiwiYmlsbGluZ19wcm9maWxlIiwiY3JlYXRlX3BheW1lbnRfbWV0aG9kIl0sInN1YiI6InByYXNhZEBtbGtncm91cC5jb20uYXUiLCJyb2xlIjpbIkV2ZXJ5b25lIiwiZmM0NmI4NDEtZmZkNS00NDZjLWIwZTEtZWQxN2VkOTEwZGIxIiwiVUkgTG9naW4gRGlzYWJsZWQiLCJVU0VSIl0sIm1lcmNoYW50X2lkIjoiY2M0ZDJhYTEtZTYxYy00YWM2LTk3OTktNzNkZjk5ODU2ZDBiIiwiaW50ZWdyYXRvcl9pZCI6ImZjNDZiODQxLWZmZDUtNDQ2Yy1iMGUxLWVkMTdlZDkxMGRiMSJ9.SIlrcWMuHsK8rJq5WDOsxO6b9LB1kAlVz4qJX2KZHwrRo0sBXQwQg1dKxi9TqFAl9Tm0b7aMuSbBuuSEGrIizFuIlH16ll8-yFmx1W5GCsDf8drrKhrhbVeUpy2VRbuBbbp-ej90GaTdAp-bDlzTre3W4wobmKLyyNhyJLZUlFdx6p31uwY3K5nHQsarDzpKkkFLlo5hy6NuYqQdhNBZsaZw0izeigNCqeCe9sqaJrB_OlhEPLwJ87pumm97_AzKgR_-fu5y-t52xVMKpivJv2BzuJefo81nu3CCemJgjZuQq9e2N9o_7UbKTonq7htgN1lqPFZrk5KshM42IlKwdA'
          }),
      })
      .pipe(
        catchError(this.handleError)
      )
  }
  create(endpoint, resource) {
    return this.http.post(endpoint, resource, {
          headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
          }),
      })
      .pipe(
        catchError(this.handleError)
      )
  }
  update(endpoint, resource) {
    return this.http.put(this.url + endpoint, JSON.stringify(resource), {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
          }),
      })
      .pipe(
        catchError(this.handleError)
      )
  }
  delete(endpoint, deleteId) {
    return this.http.delete(this.url + endpoint + '/' + deleteId)
    .pipe(
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    alert(error.message);
    return throwError(error.message);
  }
}
