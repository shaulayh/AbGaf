import {Component, OnInit} from '@angular/core';
import {MapResources} from './map-resources';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationsService} from './module/notifications.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

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
  public notificationsConfig;

  constructor(private mapResources: MapResources,
              private modalService: NgbModal,
              private notificationsService: NotificationsService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.notificationsConfig = notificationsService.notificationsConfig;
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-shopping_cart-24px.svg'));
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
