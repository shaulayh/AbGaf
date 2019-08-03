import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    let user = this.authService.getCurrentUser();
    this.name = user.name;
    this.email = user.email;
  }

}
