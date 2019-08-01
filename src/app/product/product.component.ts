import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product-model';
import {ProductsResources} from '../product-section/products.resources';
import {nextContext} from '@angular/core/src/render3';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  imageUrl: string;

  @Input()
  product: Product;

  image: any;

  constructor(private productResource: ProductsResources) {
  }

  ngOnInit() {
  }

}
