import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsResources} from '../product-section/products.resources';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  user: { id: number, name: string };

  constructor(private activeRoute: ActivatedRoute,
              private productResources: ProductsResources) {
  }

  ngOnInit() {

    this.user = {
      id: +this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };
    this.productResources.getProductById(this.user.id).subscribe((next) => {
      console.log(next);
    });
    this.activeRoute.params.subscribe((param: Params) => {
      this.user.id = +param['id'];
      this.user.name = param['name'];
    });


  }

}
