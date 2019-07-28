import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MapService {

  constructor(private http: HttpClient) {
  }

  getlocation() {
    return this.http.
    get('http://api.ipapi.com/83.26.250.209?access_key=b51f03fb5a454d27cb60cbad5ce5ea97');
  }
}
