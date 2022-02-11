import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImagesComponent} from "./images/images.component";
import {ConverterComponent} from "./converter/converter.component";
import {CryptoConverterComponent} from "./crypto-converter/crypto-converter.component";

const routes: Routes = [
  { path: '', redirectTo: 'converter', pathMatch: 'full'},
  { path: 'converter', component: ConverterComponent},
  { path: 'crypto-websites', component: ImagesComponent},
  { path: 'crypto-converter', component: CryptoConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
