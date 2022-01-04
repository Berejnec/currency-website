import { Component, OnInit } from '@angular/core';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  faDollarSign = faDollarSign;

  constructor() { }

  ngOnInit(): void {
  }

}