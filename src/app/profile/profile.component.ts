import {Component, OnInit} from '@angular/core';
import {AuthenticationService, Roles} from '../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  role = '';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.name = user.name;
    this.email = user.email;
    for (const role of user.roles) {
      this.role = this.role + role.name;
    }
  }

}
