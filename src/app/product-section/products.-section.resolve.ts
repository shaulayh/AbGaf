import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Product} from '../model/product-model';
import {ProductService} from '../product/product.service';
import {ProductsResources} from './products.resources';
import {RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs';


@Injectable()
export class ProductsSectionResolve implements Resolve<Product[]> {

  constructor(private productsResource: ProductsResources) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productsResource.getProducts();
  }
}
