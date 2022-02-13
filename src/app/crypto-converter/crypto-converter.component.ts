import {Component, Input, OnInit} from '@angular/core';
import {CryptoService} from "../services/crypto.service";
import {NgForm} from "@angular/forms";
import {NotificationsService} from "angular2-notifications";

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

  constructor(private crypto: CryptoService, private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.crypto.getBTCUSD().subscribe(price => this.cryptoValue = price);
  }

  onSubmit() {
    let aux = this.inputValue;
    this.crypto.getBTCUSD().subscribe(price => this.btcUsdValue = aux * price);
  }

  createNotification(input: any, form: NgForm) {
    if(isNaN(input)) {
      this.notificationService.error('Invalid input!', 'Enter a valid number of Bitcoins you want to convert', {
        timeOut: 3500,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        animate: 'fromRight',
        preventDuplicates: true
      });
      form.resetForm();
    }
  }
}
