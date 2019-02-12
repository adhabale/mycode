import { Component, DoCheck } from '@angular/core';
import * as _ from 'lodash';
import { GlobalService } from '../../common/services/global.service';
import { Router } from "@angular/router";
import { MatDialog, Sort } from '@angular/material';
import { DelegateAssignmentDialogComponent } from '../shared/delegate-assignment-dialog/delegate-assignment-dialog.component';
import { CommentTemplateComponent } from 'src/app/shared/components/comment-template/comment-template.component';

@Component({
  selector: 'my-workqueue',
  templateUrl: './myTeamWorkQueue.component.html',
  styleUrls: ['./myTeamWorkQueue.component.scss']
})
export class MyTeamWorkQueueComponent implements DoCheck {
  title = 'My Task Workqueue';
  territorys: string[] = ['SMART', 'Broad'];
  workstreams: string[] = ['Standard Sanctions', 'Iran Sanctions', 'Consultancy Service', 'Controlled Goods', 'Payments',];
  sanctionCountries: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  statusList: string[] = ['Draft', 'Submitted', 'In-Process', 'Awaiting Information', 'Approved', 'Declined', 'Amendment'];
  policytypes: string[] = ['New', 'Renewal'];
  RAGStatus: string[] = ['Green', 'Amber', 'Red'];
  businessAreas: string[] = ['CRB(GB)', 'Transportation Marin', 'IRR (Willis Re)'];
  data: any[] = [
  { "id": '12345', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New', "date": '15-jan-2019', "assignedTo": 'Avinash Yadav', "status": 'In Process',"createdby":'Anjali' },
  { "id": '23456', "workStream": 'Standard Sanction', "businessArea": 'CRB(GB)', "policyType": 'New', "date": '15-jan-2019', "assignedTo": 'Avinash Yadav', "status": 'In Process',"createdby":'Asha' },
  { "id": '34521', "workStream": 'Iran Sanction', "businessArea": 'IRR', "policyType": 'Renewal', "date": '25-Feb-2019', "assignedTo": 'Amruta D', "status": 'In Process',"createdby":'Avinash' },
  { "id": '34521', "workStream": 'Control Goods', "businessArea": 'Transportation Marin', "policyType": 'New', "date": '25-Feb-2019', "assignedTo": 'Amruta D', "status": 'In Process' ,"createdby":'Sayali'}
  ];

  tempdata: any[];
  sortedData: any[];

  step = 0;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService: GlobalService, private router: Router, public dialog: MatDialog) {
    this.sortedData = this.tempdata;
  }
  ngOnInit() {
    this.tempdata = this.globalService.result.value;
    sortedData: this.tempdata;
    // this.tempdata = null;
  }

  ngDoCheck() {
    this.tempdata = this.globalService.data.getValue();
  }

  filter(val) {
    this.tempdata = this.globalService.data.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData;
    this.globalService.data.next(this.tempdata)

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
        case 'requestId': return compare(a.requestId, b.requestId, isAsc);
        case 'workstream': return compare(a.workstream, b.workstream, isAsc);
        case 'businessarea': return compare(a.businessarea, b.businessarea, isAsc);
        case 'policytype': return compare(a.policytype, b.policytype, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'createdby': return compare(a.createdby, b.createdby, isAsc);
       // case 'action': return compare(a.action, b.action, isAsc);
        default: return 0;
      }
    });
  }


  navigate(val) {
    let user = 'redirect';
    switch (val) {
      case "Standard Sanction": {
        this.router.navigate(['standard-sanction', user]);
      };
        break;
      case "Iran Sanction": {
        this.router.navigate(['iran-sanction', user]);
      };
        break;
      case "Control Goods": {
        this.router.navigate(['controlled-goods', user]);
      };
        break;
      case "default": {
        this.router.navigate(['my-workqueue', user]);
      }
    }
  }

  // onSelect(referalID) {
  //   this.router.navigate(['/amendment', referalID]);
  // }

  onSelect() {
    // this.router.navigate(['standard-sanction-review', referalID]);
    this.router.navigate(['standard-sanction-review']);
  }

  reset() {
    this.tempdata = this.globalService.result.value;
    this.globalService.data.next(this.tempdata)
  }
  disableBtn(type, status) {
   // if (type == 'New' && status == 'Approved') {

    
  if(this.globalService.user.value != 'Business User'){
      let styles = {
        'cursor': 'pointer',
        'color': '#000000'        
      };
      return styles;
    }
    else {
      let anchor = {
        'color': '#808080',
        'cursor': 'not-allowed',
        'opacity': '0.5',
        'text-decoration': 'none',
        'pointer-events': 'none',
        
      }
      return anchor;
    }
  }
  name;
  reasign() {
    const dialogRef = this.dialog.open(DelegateAssignmentDialogComponent, {
      width: '300px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  openDialog(): void { const dialogRef = this.dialog.open(CommentTemplateComponent,{
    width: '500px',
    height:'450px',
    data: {}
  })}

  isSanctionUser() {
    if (this.globalService.user.value == "Sanction User") {
      return true;
    }
    else { return false }
  }
  checkUser(val) {
    if (this.globalService.user.value == 'Business User') {
      val.form.disable();
    }
  }

  respondQuery(){
    // this.dialogRef.close();
    this.router.navigate(['query-management']);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}