import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../login/login.resource';
import {AuthResponse} from '../authentication/authentication.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductsResources {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<AuthResponse>('/api/product/listOfProducts');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>('/api/product/' + id);
  }
}
