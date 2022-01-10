import { Component, OnInit } from '@angular/core';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faPoundSign } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  faDollarSign = faDollarSign;
  faEuroSign = faEuroSign;
  faPoundSign = faPoundSign;

  constructor() { }

  ngOnInit(): void {
  }

}
