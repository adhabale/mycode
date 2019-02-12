import { Component, OnInit, DoCheck} from '@angular/core';
import { GlobalService } from '../../common/services/global.service';
import {MatDialog,Sort, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditInsuranceTypeComponent } from './edit-insurance-type/edit-insurance-type.component';


@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.scss']
})
export class InsuranceTypeComponent implements OnInit {
  insuranceTypeName:string[]=['CRB(GB)','Transportation Marin','IRR (Willis Re)', 'Consultancy Service'];
  insuranceTypeGroup:string[]=['Standard', 'Iran', 'Consultancy Service', 'Controlled Goods', 'Payments'];
  descriptions:string[]=['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran'];

  animal: string;
  name: string;
  sortedData: any[];
  tempdata: any[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService: GlobalService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.tempdata = this.globalService.insuranceTypeData.value;
  }
  ngDoCheck() {
    this.tempdata = this.globalService.insuranceTypeData.getValue();
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
        case 'InsuranceType': return compare(a.InsuranceType, b.InsuranceType, isAsc);
        case 'Description': return compare(a.Description, b.Description, isAsc);              
        default: return 0;
      }
    });
  }

  openDialog(item): void {
    if (!item){
      item = null
      this.dialog.open(EditInsuranceTypeComponent, {
        width: '380px',
          height:'350px',
            data: {name: "", group: "", description:""}
      });
      
    }
      else{
     this.dialog.open(EditInsuranceTypeComponent, {
      width: '380px',
     height:'350px',
      data: {name: item.insuranceTypeName, group: item.insuranceTypeGroup, description:item.descriptions}
    });
  }
}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
