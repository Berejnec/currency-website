import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private baseUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

  constructor(private http: HttpClient) { }

  getBTCUSD() {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => data["price"])
    );
  }
}
