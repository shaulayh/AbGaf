import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';


interface Location {
  longitude: number;
  latitude: number;
}

@Injectable()
export class MapResources implements OnInit {

  key: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  getlocation() {
    this.key = 'b51f03fb5a454d27cb60cbad5ce5ea97';
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=b51f03fb5a454d27cb60cbad5ce5ea97');
  }
}
