import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultancy-services-review',
  templateUrl: './consultancy-services-review.component.html',
  styleUrls: ['./consultancy-services-review.component.scss']
})
export class ConsultancyServicesReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ELEMENT_DATA: any[] = [
    { name: 'FGH Entity', placeOfIncorporation: 'Russia'}
  ];

  displayedColumns: string[] = ['name', 'placeOfIncorporation'];
  dataSource = this.ELEMENT_DATA;


}
