import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationsService} from '../module/notifications.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private notification: NotificationsService) {

  }

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.notification.warning('you have to login to view this page');
      this.router.navigate(['/']);
      return false;
    }
  }
}
