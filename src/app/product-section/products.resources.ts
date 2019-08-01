import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product-model';
import {map} from 'rxjs/internal/operators';


@Injectable()
export class ProductsResources {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/product/listOfProducts').pipe(
      map(res => res)
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>('/api/product/' + id);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>('/api/product/let/' + id);
  }
}
