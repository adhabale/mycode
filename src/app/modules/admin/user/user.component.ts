import { Component, OnInit,DoCheck } from '@angular/core';
import * as _ from 'lodash';
import { GlobalService } from '../../common/services/global.service';
import { Router } from "@angular/router";
import { AdduserComponent } from './adduser/adduser.component';
import { MatDialog,Sort } from '@angular/material';
import { template } from '@angular/core/src/render3';
// import {UserInfoFilteredData,SearchCriteria} from './searchCriteria.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],  
})
export class UserComponent implements DoCheck {

  // searchCriteria: SearchCriteria;
  // userInfoFilteredData:any;  
  // userInfoFliteredDataDemo: UserInfoFilteredData; 
  public edited = false;
 flag:boolean;
  
  title = 'Users';
  role: string[] = ['Admin', 'Business', 'Sanctions'];
  BusinessUnit: string[] = ['CRB(GB)', 'IRR', 'Transportation Marine',];
  Country: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  status: string[] = ['Active','Inactive'];
  
  userinfo: any[] = [
    { "FirstName": 'Sayali', "LastName": 'Shindikar', "Email":'sayali.shindikar@capgemini.com',"Role":'SMART',"businessArea": 'CRB(GB)',"Country":'Iran', "status": 'In Process' },
    { "FirstName": 'Sayali', "LastName": 'Shindikar', "Email":'sayali.shindikar@capgemini.com',"Role":'SMART',"businessArea": 'CRB(GB)',"Country":'Iran', "status": 'In Process' },
    { "FirstName": 'Sayali', "LastName": 'Shindikar', "Email":'sayali.shindikar@capgemini.com',"Role":'SMART',"businessArea": 'CRB(GB)',"Country":'Iran', "status": 'In Process' },
    { "FirstName": 'Sayali', "LastName": 'Shindikar', "Email":'sayali.shindikar@capgemini.com',"Role":'SMART',"businessArea": 'CRB(GB)',"Country":'Iran', "status": 'In Process' },
    { "FirstName": 'Sayali', "LastName": 'Shindikar', "Email":'sayali.shindikar@capgemini.com',"Role":'SMART',"businessArea": 'CRB(GB)',"Country":'Iran', "status": 'In Process' },
  ];
  tempdata: any[];
  updateddata: any[];
  sortedData: any[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService: GlobalService,public dialog: MatDialog, private router: Router) { }

  ngOnInit() { 
    this.updateddata=null;
    this.tempdata = this.globalService.userinfo.value;
    // this.searchCriteria = new SearchCriteria();
    }

   ngDoCheck() {
    this.tempdata = this.globalService.userinfo.getValue();
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


  filter(val: any,v2,v3,v4,v5,v6) {
    this.edited = true;
    this.tempdata = this.globalService.userinfo.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return (item.DisplayName == val || item.Email == v2 || item.businessArea == v3 || item.Country == v4 || item.Role == v5 || item.status == v6 );
      
    });    
    this.tempdata = updatedData;
    this.globalService.userinfo.next(this.tempdata)
  }

   
  openDialog(item) {  
    if (!item)
      item = null;
    this.dialog.open(AdduserComponent, {
      width: '550px',
      height: '500px',
      data: item
      
    });
  }
  
}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
