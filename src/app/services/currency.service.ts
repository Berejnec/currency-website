import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUr2l = "https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=[YOUR_API_KEY]"
  private firstBaseUrl = "https://free.currconv.com/api/v7/convert?q="
  private secondBaseUrl = "&compact=ultra&apiKey="
  private apiKey = environment.apiKey;
  private value: any = [];

  constructor(private http: HttpClient) {}

  getUsdCurrency() {
    return this.http.get<any>(`${this.firstBaseUrl}RON_USD${this.secondBaseUrl}${this.apiKey}`).pipe(
      map(value => value['RON_USD'])
    );
  }

}
