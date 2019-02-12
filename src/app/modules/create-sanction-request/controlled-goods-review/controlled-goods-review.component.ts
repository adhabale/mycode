import { Component, OnInit, Input } from '@angular/core';

export interface Qthreeone {
  Name: string;
  Place:string;
}

export interface Qthreetwo {
  Name: string;
  Place:string;
}

const ELEMENT_DATA: Qthreeone[] = [
  {Name: 'XYZ Entity', Place: 'Turkey'},
  ];
  const ELEMENT_DATA1: Qthreetwo[] = [
    {Name: 'ABC Entity', Place: 'Belgium'},
    ];

@Component({
  selector: 'app-controlled-goods-review',
  templateUrl: './controlled-goods-review.component.html',
  styleUrls: ['./controlled-goods-review.component.scss']
})



export class ControlledGoodsReviewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Place'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = ['Name', 'Place'];
  dataSource1 = ELEMENT_DATA1;

  constructor() { }

  ngOnInit() {
  }

}
