import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLogin: boolean;

  constructor(private modalService: NgbModal,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.showLogin = this.authService.isUserLoggedIn();
  }


  open() {
    console.log('was here');
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }
}
