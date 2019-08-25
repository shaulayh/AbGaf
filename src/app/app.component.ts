import {Component, OnInit} from '@angular/core';
import {MapResources} from './map-resources';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationsService} from './module/notifications.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  showLoadingIndicator = true;
  lat = 51.678418;

  lng = 7.809007;
  private publishableKey = 'pk_test_tQF4q4t82CH8ZTNaV7jKrz0700hou6IPzV';
  public notificationsConfig;

  constructor(private mapResources: MapResources,
              private modalService: NgbModal,
              private notificationsService: NotificationsService,
              public iconRegistry: MatIconRegistry,
              public sanitizer: DomSanitizer,
              private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
    this.notificationsConfig = notificationsService.notificationsConfig;
    // this.StripeScriptTag.setPublishableKey(this.publishableKey);
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-shopping_cart-24px.svg'));
  }


  ngOnInit() {
    this.mapResources.getlocation().subscribe(data => {
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
