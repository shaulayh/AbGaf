import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DashboardResource {

  constructor(private http: HttpClient) {
  }

  saveUserToServer(formData: FormData) {
    return this.http.post<any>('/api/product/saveUser', formData);
  }

}

export class LoginRequest {
  constructor(public email: string,
              public password: string) {
  }
}
