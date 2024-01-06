import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkRequestService {

  baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  get(endPoint: string): Observable<any> {
    return this.http.get(this.baseUrl + endPoint);
  }
}
