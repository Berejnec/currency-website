import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../services/currency.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  usdValue!: number;
  eurValue!: number;
  gbpValue!: number;

  constructor(private currency: CurrencyService) { }

  ngOnInit(): void {
    this.currency.getUsdCurrency().subscribe(data => this.usdValue = data);
    this.currency.getEuroCurrency().subscribe(data => this.eurValue = data);
    this.currency.getGbpCurrency().subscribe(data => this.gbpValue = data);
  }

}
