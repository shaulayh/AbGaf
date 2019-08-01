import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsResources} from '../product-section/products.resources';
import {Product} from '../model/product-model';
import {ProductService} from '../product/product.service';
import {NotificationsService} from '../module/notifications.service';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  user: { id: number, name: string };

  product: Product;

  imageUrl = 'data:image/JPG;base64,';

  productsAddedToCart: any;
  numberOfItemInCart: number;

  constructor(private activeRoute: ActivatedRoute,
              private productResources: ProductsResources,
              private productsService: ProductService,
              private notificationService: NotificationsService,
              private sharedService: SharedService) {
  }

  ngOnInit() {

    this.user = {
      id: +this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };
    this.productResources.getProductById(this.user.id).subscribe((next) => {
      this.product = next;
      console.log(this.product);
      this.imageUrl = this.imageUrl + this.product.image;
    });
    this.activeRoute.params.subscribe((param: Params) => {
      this.user.id = +param['id'];
      this.user.name = param['name'];
    });
  }


  addToCart(product: Product) {
    console.log(product);
    this.productsAddedToCart = JSON.parse(this.productsService.getProductsFromCart());
    if (this.productsAddedToCart == null) {
      this.productsAddedToCart = [];
      this.productsAddedToCart.push(product);
      this.productsService.addToCart(this.productsAddedToCart);
      console.log(this.productsAddedToCart);
      this.notificationService.success('successfully added');
    } else {
      const temp = this.productsAddedToCart.find(p => p.id === product.id);
      if (temp == null) {
        console.log(temp);
        this.productsAddedToCart.push(this.product);
        this.productsService.addToCart(this.productsAddedToCart);
        this.notificationService.success('successfully added');
      }
    }
    this.numberOfItemInCart = this.productsAddedToCart.length;
    console.log(this.numberOfItemInCart);
    this.sharedService.updateNumberOfItemOnCart(this.numberOfItemInCart);
    this.sharedService.updateCurrentCart(this.numberOfItemInCart);
  }
}
