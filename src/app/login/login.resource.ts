import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthResponse} from '../authentication/authentication.service';

@Injectable()
export class LoginResource {

  constructor(private http: HttpClient) {
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', request);
  }

  getLoggedInUser(auth_token): Observable<any> {
    const headers = new HttpHeaders().set('Authorization',
      'Bearer ' + auth_token);
    return this.http.get('/api/auth/user/me', {headers: headers});
  }
}

export class LoginRequest {
  constructor(public email: string,
              public password: string) {
  }
}
