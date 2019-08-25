import {Component, OnInit} from '@angular/core';
import {ProductsResources} from './products.resources';
import {Product} from '../model/product-model';
import {NotificationsService} from '../module/notifications.service';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  products: Product[];

  constructor(private productsResource: ProductsResources,
              private router: ActivatedRoute) {
    this.products = this.router.snapshot.data['productList'];
  }

  ngOnInit() {
    this.productsResource.getProducts().subscribe((next) => {
      this.products = next;
    });
  }

}
