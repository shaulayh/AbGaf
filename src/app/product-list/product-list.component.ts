import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  toDos: string[] = ['../../assets/download.jpg', '../../assets/convert-photo-to-pdf-ios.jpg',
    '../../assets/download.jpg', '../../assets/download.jpg'];

  currentJustify = 'fill';

  constructor() {
  }

  ngOnInit() {
  }

}
