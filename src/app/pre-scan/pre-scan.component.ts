import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pre-scan',
  templateUrl: './pre-scan.component.html',
  styleUrls: ['./pre-scan.component.css']
})
export class PreScanComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  carDetails: any;


  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.httpClient.get('assets/list.json').subscribe((res: any) => {
          res.filter(car => {
            if (car.vinNo === params.id) {
              this.carDetails = car;
            }
          });

        });
      });
  }

}
