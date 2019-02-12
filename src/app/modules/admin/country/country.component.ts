import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../common/services/global.service';
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { MatDialog,Sort } from '@angular/material';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public edited = false;
  Territories:string[]=['Smart','Broad','NA'];
  countryinfo: any[] = ([
    { "country": 'India', "countryCode": 'IN', "currencyName": '123', "currencyCode": 'Active', "currencySymbol": '$', "Territory": 'Broad', },
    { "country": 'Afghanistan', "countryCode": 'AFN', "currencyName": 'Afghani', "currencyCode": '971', "currencySymbol": 'Af', "Territory": 'Smart', },
    { "country": 'Australia', "countryCode": 'AUD', "currencyName": 'Australian Dollar', "currencyCode": '032', "currencySymbol": '$', "Territory": 'Broad', },
    { "country": 'Brazil', "countryCode": 'BRL', "currencyName": 'Brazilian Real', "currencyCode": '096', "currencySymbol": 'R$', "Territory": 'Smart', },
  ]);
  tempdata: any[];
  sortedData: any[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService: GlobalService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.tempdata = this.globalService.countryinfo.value;
  }

  ngDoCheck() {
    this.tempdata = this.globalService.countryinfo.getValue();
  }

  filter(val1: any,v2,v3) {
    this.tempdata = this.globalService.countryinfo.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return (item.country == val1 || item.currencyCode == v2 || item.Territory == v3 );
    
    });
    this.tempdata = updatedData;
    this.globalService.countryinfo.next(this.tempdata)
  }
  navigate(val) {
  }


  sortData(sort: Sort) {
    const data = this.tempdata;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'CountryName': return compare(a.CountryName, b.CountryName, isAsc);
        case 'CountryName': return compare(a.CountryName, b.CountryName, isAsc);
        case 'CountryName': return compare(a.CountryName, b.CountryName, isAsc);
        case 'CountryName': return compare(a.CountryName, b.CountryName, isAsc);
       
        default: return 0;
      }
    });
  }

  openDialog(item) {
    if (!item)
      item = null;
    this.dialog.open(AddcountryComponent, {
      width: '540px',
      height: '550px',
      data: item
    });
  }

  Edit()
  {
   this.edited = true;
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
