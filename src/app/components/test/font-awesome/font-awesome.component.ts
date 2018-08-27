import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.css']
})
export class FontAwesomeComponent implements OnInit {

  myFontAwesomeIcon = {
    iconName: 'amazon-pay',
    prefix: 'fab'
  };

  constructor() { }

  ngOnInit() {
  }

}
