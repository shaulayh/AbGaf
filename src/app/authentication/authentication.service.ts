import {Injectable} from '@angular/core';
import {LoginRequest, LoginResource} from '../login/login.resource';
import {Router} from '@angular/router';


@Injectable()

export class AuthenticationService {

  constructor(private loginResource: LoginResource,
              private router: Router) {
  }

  authenticate(username, password) {

    this.loginResource.login(new LoginRequest(username, password)).toPromise()
      .then(
        (response: Response) => {
          // const token = response.accessToken;
          console.log(response);
          //    sessionStorage.setItem('accessToken', response.accessToken);
          // localStorage.setItem('accessToken', response.accessToken);
          return true;
        }
      ).catch(reason => {
      console.log('not succesfull');
    });

    return false;
  }


  isUserLoggedIn() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['profile']);
      return true;
    } else {
      return false;
    }
  }


  getCurrentUser() {
    // console.log(localStorage.getItem('accessToken'));
    this.loginResource.getLoggedInUser(localStorage.getItem('accessToken')).subscribe(
      next => console.log('was here longg')
    );
  }


  logOut() {
    localStorage.removeItem('accessToken');
  }
}
