import {Injectable} from '@angular/core';


@Injectable()
export class ProductService {

  constructor() {
  }

  addToCart(product: any) {
    localStorage.setItem('products', JSON.stringify(product));
  }

  getProductsFromCart() {
    return localStorage.getItem('products');
    // return JSON.parse(localStorage.getItem('products'));
  }

  removeProductsFromCart() {
    return localStorage.removeItem('products');
  }
}
