import {Injectable} from '@angular/core';
import {LoginRequest, LoginResource} from '../login/login.resource';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SubjectSubscription} from 'rxjs/SubjectSubscription';


@Injectable()

export class AuthenticationService {

  userEmail: string;

  constructor(private loginResource: LoginResource,
              private router: Router) {
  }

  authenticate(username, password) {
    this.loginResource.login(new LoginRequest(username, password)).toPromise()
      .then(
        (response: AuthResponse) => {
          console.log(response);
          //    sessionStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('accessToken', response.accessToken);
          return true;
        }
      ).catch(reason => {
      console.log('not succesfull');
    });

    return false;
  }


  isUserLoggedIn() {
    if (localStorage.getItem('accessToken')) {
      return true;
    } else {
      return false;
    }
  }


  getCurrentUser(): UserResponse {
    let response: UserResponse = null;
    this.loginResource.getLoggedInUser(localStorage.getItem('accessToken')).subscribe(
      (next: UserResponse) => {
        response = next;
        this.userEmail = next.email;
        console.log(response);
        return response;
      }
    );

    return response;
  }

  logOut() {
    localStorage.removeItem('accessToken');
  }

}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
}

export interface UserResponse {
  id: number;
  email: string;
  birthDate: string;
  emailVerified: boolean;
  imageUrl: string;
  name: string;
  provider: string;
  providerId: number;
}

