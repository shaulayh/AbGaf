import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {NotificationsService} from '../module/notifications.service';

@Injectable()
export class AuthSellerGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private notification: NotificationsService) {

  }

  canActivate(): boolean {
    let canAccess = this.authService.getCurrentUserRoles()
      .find(p => p.name === 'ROLE_ADMIN') != null;
    console.log(canAccess);
    if (canAccess) {
      return true;
    } else {
      this.notification.warning('To log in you have to have seller right');
      this.router.navigate(['/']);
      return false;
    }
  }
}
