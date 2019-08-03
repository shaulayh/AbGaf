import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../model/product-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
  productsAddedToCart: Product[];

  AllTotal = 0;

  isLinear = true;

  shippingForm: FormGroup;
  options: FormGroup;
  displayedColumns: string[] = ['Product', 'Price', 'Quantity', 'Total'];

  displayShippingDetail: string[] = ['Name', 'Address', 'email', 'remark'];
  dataSource: any = [];
  address: string;

  constructor(private productsService: ProductService,
              private formBuilder: FormBuilder) {
    this.options = formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.productsAddedToCart = JSON.parse(this.productsService.getProductsFromCart());
    for (const item of this.productsAddedToCart) {
      item.availableUnit = 1;
    }
    this.productsService.removeProductsFromCart();
    this.productsService.addToCart(this.productsAddedToCart);
    this.calculateTotal(this.productsAddedToCart);

    this.shippingForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: [''],
      phoneNo: ['', Validators.required],
      city: ['', Validators.required],
      postNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      state: ['', [Validators.required]],
      remark: ['']
    })
    ;
    this.dataSource = this.productsAddedToCart;
    this.address = this.shippingForm.controls['addressOne'].value
      + ',' + this.shippingForm.controls['city'].value + ' '
      + this.shippingForm.controls['state'].value + ','
      + this.shippingForm.controls['postNo'].value;
  }

  onIncrease(product: Product) {
    this.productsAddedToCart.find(p => p.id === product.id).availableUnit
      = product.availableUnit + 1;
    this.productsService.removeProductsFromCart();
    this.productsService.addToCart(this.productsAddedToCart);
    this.calculateTotal(this.productsAddedToCart);
  }


  onDecrease(product: Product) {
    const inProduct = this.productsAddedToCart.find(p => p.id === product.id);
    const temp: number = Number(inProduct.availableUnit);
    if (temp > 1) {
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
    let total: any = 0;
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

  onSubmitDetail() {
    this.dataSource = this.productsAddedToCart;
    console.log(this.shippingForm);
    this.address = this.shippingForm.controls['addressOne'].value
      + ',' + this.shippingForm.controls['city'].value + ' '
      + this.shippingForm.controls['state'].value + ','
      + this.shippingForm.controls['postNo'].value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.address = this.shippingForm.controls['addressOne'].value
      + ',' + this.shippingForm.controls['city'].value + ' '
      + this.shippingForm.controls['state'].value + ','
      + this.shippingForm.controls['postNo'].value;
  }
}
