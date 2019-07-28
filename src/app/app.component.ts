import {Component, OnInit} from '@angular/core';
import {MapResources} from './map-resources';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GoodComponent} from './good/good.component';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'AbGAF';
  lat = 51.678418;

  lng = 7.809007;
  public isCollapsed = false;
  closeResult: string;

  constructor(private mapResources: MapResources,
              private modalService: NgbModal) {
  }


  ngOnInit() {
    this.mapResources.getlocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    });
  }

  checkLocation(event) {
    console.log(event);
    this.lat = event.coords.latitude;
    this.lng = event.coords.longitude;
  }





}
