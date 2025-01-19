import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../commmon/purchase';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  private purchaseUrl =environment.luv2shopApiUrl + '/checkout/purchase';
  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any>{
    //Purchase este tipul
    //purchase este obiectul de tip Purchase
    //purchaseUrl pe acest endpoint va trimite datele
    //de tip post
    return this.httpClient.post<Purchase>(this.purchaseUrl,purchase);
  }
}
