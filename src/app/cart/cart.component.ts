import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../model/product-model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  prodQuantity = 0;

  productsAddedToCart: Product[];

  AllTotal = 0;

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.productsAddedToCart = JSON.parse(this.productsService.getProductsFromCart());
    for (const item of this.productsAddedToCart) {
      item.availableUnit = <string>1;
    }
    this.productsService.removeProductsFromCart();
    this.productsService.addToCart(this.productsAddedToCart);
    this.calculateTotal(this.productsAddedToCart);
  }

  onIncrease(product: Product) {
    this.prodQuantity = this.prodQuantity + 1;
    this.productsAddedToCart.find(p => p.id === product.id).availableUnit
      = product.availableUnit + 1;
    this.productsService.removeProductsFromCart();
    this.productsService.addToCart(this.productsAddedToCart);
    this.calculateTotal(this.productsAddedToCart);
  }

  onDecrease(product: Product) {
    const inProduct = this.productsAddedToCart.find(p => p.id === product.id);
    if (inProduct.availableUnit > 0) {
      inProduct.availableUnit = product.availableUnit - 1;
    }
    this.productsService.removeProductsFromCart();
    this.productsService.addToCart(this.productsAddedToCart);
    this.AllTotal = this.calculateTotal(this.productsAddedToCart);
  }

  getTotal() {
    return this.calculateTotal(this.productsAddedToCart);
  }

  calculateTotal(allItem: Product[]) {
    let total = 0;
    for (const item of allItem) {
      total = total + (item.availableUnit * item.price);
    }
    return total;
  }

  removeFromCart(product: Product) {
    let index;
    for (const i in this.productsAddedToCart) {
      if (this.productsAddedToCart[i].id === product.id) {
        index = i;
      }
    }
    this.productsAddedToCart.splice(index, 1);
    console.log(index);
  }
}
