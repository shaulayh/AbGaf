import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  user: { id: number, name: string };

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.user = {
      id: +this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };
    this.activeRoute.params.subscribe((param: Params) => {
      this.user.id = +param['id'];
      this.user.name = param['name'];
    });
  }

}
