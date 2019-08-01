import {Injectable} from '@angular/core';
import {Product} from '../model/product-model';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class SharedService {
  numberOfItemInCart = 0;
  products: Product[];
  currentCart = new BehaviorSubject(0);

  updateNumberOfItemOnCart(number: number) {
    this.numberOfItemInCart = number;
  }

  getNumberOfItemInCart() {
    this.products = JSON.parse(localStorage.getItem('products'));
    return this.products.length;
  }

  updateCurrentCart(number) {
    this.currentCart.next(number);
  }
}
