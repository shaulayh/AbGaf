import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginResource {

  constructor(private http: HttpClient) {
  }

  login(request: LoginRequest): Observable<Response> {
    return this.http.post<Response>('/auth/login', request);
  }

  getLoggedInUser(auth_token): Observable<any> {
    const headers = new HttpHeaders().set('Authorization',
      'Bearer ' + auth_token);
    return this.http.get('/auth/user/me', {headers: headers});
  }
}

export class LoginRequest {
  constructor(public email: string,
              public password: string) {
  }
}
