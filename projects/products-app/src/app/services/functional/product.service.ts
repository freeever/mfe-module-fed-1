import { Observable } from 'rxjs';
import { NetworkRequestService } from './../core/network-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private networkRequestService: NetworkRequestService) { }

  getProducts(): Observable<any> {
    return this.networkRequestService.get('products');
  }
}
