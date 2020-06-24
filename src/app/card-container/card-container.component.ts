import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {


  // tslint:disable-next-line: no-input-rename
  @Input('carList') carList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
