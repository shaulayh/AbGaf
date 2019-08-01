import {Component, OnInit} from '@angular/core';
import {ProductsResources} from './products.resources';
import {Product} from '../model/product-model';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  toDos: string[] = ['../../assets/download.jpg', '../../assets/convert-photo-to-pdf-ios.jpg',
    '../../assets/download.jpg', '../../assets/download.jpg'];

  products: Product[];

  constructor(private productsResource: ProductsResources) {
  }

  ngOnInit() {
    this.productsResource.getProducts().subscribe((next) => {
      this.products = next;
    });
  }

}
