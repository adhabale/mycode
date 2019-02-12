import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { GlobalService } from '../../../common/services/global.service';
import { EditBuComponent } from './edit-bu/edit-bu.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,Sort} from '@angular/material';


@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss']
})
export class BusinessUnitComponent implements OnInit {

  buName:string[]=['CRB(GB)','Willis GB - Transportation (Aerospace)','Willis GB - P&C (SCS)', 'Willis GB - P&C (PMI Health) / CRB - PMI Health','Willis GB - P&C (Faber Global)',''];
  buCode:string[]=['GB-AR', 'GB-AR ', 'GB-UK', 'GB-SCS', 'GB-PMI','GB-FG'];
  buGroup:string[]=['Transportation', 'CRB'];
  tempdata: any[];
  sortedData: any[];
  item:any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }
  

  constructor(private globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit() {
    this.tempdata = this.globalService.businessUnitData.value;
  }

  ngDoCheck() {
    this.tempdata = this.globalService.businessUnitData.getValue();
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
        case 'BusinessUnitName': return compare(a.BusinessUnitName, b.BusinessUnitName, isAsc);
        case 'BusinessUnitCode': return compare(a.BusinessUnitCode, b.BusinessUnitCode, isAsc);
        case 'BusinessGroup': return compare(a.BusinessGroup, b.BusinessGroup, isAsc);
               
        default: return 0;
      }
    });
  }
  openDialog(item): void {
    if (!item){
      item = null
      this.dialog.open(EditBuComponent, {
        width: '380px',
        height:'390px',
        // data: item\
        data: {name: "", code: "", group: ""}
      });
      
    }
      else{
     this.dialog.open(EditBuComponent, {
      width: '380px',
      height:'390px',
      data: {name: item.buName, code: item.buCode, group: item.buGroup}
    });
  }
}
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
