import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  // tslint:disable-next-line: no-input-rename
  @Input('car') car: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.car)
  }

}
