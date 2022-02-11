import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = environment.apiKey;
  private baseUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/RON`;

  constructor(private http: HttpClient) {}

  getUsdCurrency() {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => data["conversion_rates"]["USD"])
    );
  }

  getEuroCurrency() {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => data["conversion_rates"]["EUR"])
    );
  }

  getGbpCurrency() {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => data["conversion_rates"]["GBP"])
    );
  }
}
