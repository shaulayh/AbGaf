import {Injectable} from '@angular/core';
import {LoginRequest, LoginResource} from '../login/login.resource';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SubjectSubscription} from 'rxjs/SubjectSubscription';
import {NotificationsService} from '../module/notifications.service';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable()

export class AuthenticationService {

  constructor(private loginResource: LoginResource,
              private router: Router,
              private notificationNotification: NotificationsService) {
  }

  authenticate(username, password) {
    this.notificationNotification.info('logging in, please wait');
    this.loginResource.login(new LoginRequest(username, password)).toPromise()
      .then(
        (response: AuthResponse) => {
          localStorage.setItem('accessToken', response.accessToken);
          this.notificationNotification.success('logged in');
          return true;
        }
      ).catch(reason => {
      this.notificationNotification.warning(reason);
    });
    return false;
  }


  isUserLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }


  getCurrentUser(): UserResponse {
    let response: UserResponse = null;
    this.loginResource.getLoggedInUser(localStorage.getItem('accessToken')).subscribe(
      (next: UserResponse) => {
        response = next;
        localStorage.setItem('currentUser', JSON.stringify(response));
        return response;
      }
    );

    const user: UserResponse = JSON.parse(localStorage.getItem('currentUser'));
    return user;
  }

  getCurrentUserRoles(): Roles[] {
    return this.getCurrentUser().roles;
  }

  signUp(request: any) {
    this.loginResource.registerNewUser(request).toPromise().then(
      (next) => {
        console.log(next);
        this.notificationNotification.success('Registered Successfully');
      }
    ).catch((reason) => {
      this.notificationNotification.error(reason.error['message']);
    });
  }

  logOut() {
    localStorage.removeItem('accessToken');
  }

}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
}

export class UserResponse {
  id: number;
  email: string;
  birthDate: string;
  emailVerified: boolean;
  imageUrl: string;
  name: string;
  provider: string;
  providerId: number;
  roles: Roles[];
}

export interface Roles {
  id: number;
  name: string;
}

export interface Response {
  message: string;
  status: string;
}
