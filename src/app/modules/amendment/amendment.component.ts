import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amendment',
  templateUrl: './amendment.component.html',
  styleUrls: ['./amendment.component.scss']
})
export class AmendmentComponent implements OnInit {

  territorys: string[] = ['SMART', 'Broad'];
  workstreams: string[] = ['Standard Sanctions', 'Iran Sanctions', 'Consultancy Service', 'Controlled Goods', 'Payments'];
  step = 0;


  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(referalID) {
    this.router.navigate(['/amendment', referalID]);
  }

}
