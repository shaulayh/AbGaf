import {Component, OnInit} from '@angular/core';
import {ProductsResources} from './products.resources';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  toDos: string[] = ['../../assets/download.jpg', '../../assets/convert-photo-to-pdf-ios.jpg',
    '../../assets/download.jpg', '../../assets/download.jpg'];

  constructor(private productsResource: ProductsResources) {
  }

  ngOnInit() {
    this.productsResource.getProducts().subscribe((next) => {
      console.log(next);
    });
  }

}
