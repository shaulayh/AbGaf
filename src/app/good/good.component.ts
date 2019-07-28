import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }

}
