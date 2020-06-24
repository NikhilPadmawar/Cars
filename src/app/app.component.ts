import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  carList: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('assets/list.json').subscribe(data => {
      console.log(data);
      this.carList = data;
    })
  }
}
