import {Component, Input, OnInit} from '@angular/core';
import {CryptoService} from "../services/crypto.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.css']
})
export class CryptoConverterComponent implements OnInit {
  @Input()
  inputValue!: number;
  cryptoValue!: number;
  btcUsdValue!: number;

  constructor(private crypto: CryptoService) { }

  ngOnInit(): void {
    this.crypto.getBTCUSD().subscribe(price => this.cryptoValue = price);
  }

  onSubmit(form: NgForm) {
    let aux = this.inputValue;
    this.crypto.getBTCUSD().subscribe(price => this.btcUsdValue = aux * price);
  }

}
