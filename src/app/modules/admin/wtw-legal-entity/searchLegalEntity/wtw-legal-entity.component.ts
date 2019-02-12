import { Component, OnInit, DoCheck } from '@angular/core';
import { GlobalService } from '../../../common/services/global.service';
import { MatDialog,Sort } from '@angular/material';
import { EditLegalEntityComponent } from '../edit-legal-entity/edit-legal-entity.component';


@Component({
  selector: 'app-wtw-legal-entity',
  templateUrl: './wtw-legal-entity.component.html',
  styleUrls: ['./wtw-legal-entity.component.scss']
})
export class WtwLegalEntityComponent implements OnInit {
  entityName: string[] = ['CRB(GB)', 'Transportation Marin', 'IRR (Willis Re)', 'Consultancy Service'];
  descriptions: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran'];
  sortedData: any[];
  tempdata: any[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit() {
    this.tempdata = this.globalService.wtwLegalEntity.value;
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
        case 'WTWLegalEntityName': return compare(a.WTWLegalEntityName, b.WTWLegalEntityName, isAsc);
        case 'Description': return compare(a.Description, b.Description, isAsc);
              default: return 0;
      }
    });
  }

  ngDoCheck() {
    this.tempdata = this.globalService.wtwLegalEntity.getValue();
  }

  
  openDialog(item): void {
    if (!item) {
      item = null
      this.dialog.open(EditLegalEntityComponent, {
        width: '380px',
        height: '370px',
        data: { name: "", description: "" }
      });

    }
    else {
      this.dialog.open(EditLegalEntityComponent, {
        width: '380px',
        height: '370px',
        data: { name: item.entityName, description: item.descriptions }
      });
    }
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
