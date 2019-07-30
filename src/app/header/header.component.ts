import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbCarousel, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../authentication/authentication.service';
import {NgbSlideEvent} from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel') carousel: NgbCarousel;

  search = '';

  showLogin: boolean;

  constructor(private modalService: NgbModal,
              private authService: AuthenticationService) {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  ngOnInit() {
    this.showLogin = this.authService.isUserLoggedIn();
  }

  open() {
    console.log('was here');
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }


  getAuthentication() {
    return this.authService.isUserLoggedIn();
  }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
  //
}
