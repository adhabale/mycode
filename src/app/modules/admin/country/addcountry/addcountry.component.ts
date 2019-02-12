import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: 'country';
}

@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.scss']
})
export class AddcountryComponent implements OnInit {

  dataItem: any;

  country: string;
  countryCode: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  territory: string;

  countries: string[] = ['India','Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  currencies: string[] = ['Doller', 'Rupees', 'Afghani','Australian Dollar','Brazilian Real',];
  currencySymbols: string[] = ['$', 'Rs ', 'Af',];
  Territories:string[]=['Smart','Broad','NA'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataItem = data;
  }

  ngOnInit() {
    if (this.dataItem) {
      
      console.log(this.dataItem);
      this.country = this.dataItem.country;
      this.countryCode = this.dataItem.countryCode;
      this.currency = this.dataItem.currencyName;
      this.currencyCode = this.dataItem.currencyCode;
      this.currencySymbol = this.dataItem.currencySymbol;
      this.territory = this.dataItem.Territory;
    }
  }


}
