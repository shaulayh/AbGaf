import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  toDos: string[] = ['../../assets/download.jpg', '../../assets/convert-photo-to-pdf-ios.jpg',
    '../../assets/download.jpg', '../../assets/download.jpg'];

  constructor() {
  }

  ngOnInit() {
  }

}
