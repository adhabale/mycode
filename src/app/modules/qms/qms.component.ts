import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from "@angular/router";
import { UploadDocComponent } from '../SanctionForms/standard-sanction/upload-doc/upload-doc.component';

export interface DialogData {
   requestId: string;
  }

  export interface assignedTo {  
  name: string;
 
}

@Component({
  selector: 'qms-component',
  templateUrl: './qms.component.html',
  styleUrls: ['./qms.component.scss']
})
export class QmsComponent implements OnInit{
    checked = true;
        // MatPaginator Inputs
  length = 10;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  step = 0;
  queryTypes: string[] = ['Document Missing', 'Information Required', 'Other'];
  IsFileUpload:boolean=false;
    

    stateCtrl = new FormControl();
  filteredStates: Observable<assignedTo[]>;

  states: assignedTo[] = [
    {
      name: 'Avinash Yadav'
    },
    {
      name: 'Asha Borkar'    
    },
    {
      name: 'Prafull Bansod'
    },
    {
      name: 'Rahul Jadhav'
    }
  ];

  constructor(private router: Router, public dialog: MatDialog ) {
        this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      ); 
     }

     ngOnInit(){
        
     }

       onNoClick(): void {
        // this.dialogRef.close();
      }
    
     private _filterStates(value: string): assignedTo[] {
        const filterValue = value.toLowerCase();
    
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
      }

      navigate(){
        // this.dialogRef.close();
        this.router.navigate(['query-reply']);
      }
      navigateTo(){
        this.router.navigate(['query-comment']);
      }
      uploadedFile;
  uploadFile() {
    const dialogRef = this.dialog.open(UploadDocComponent, {
      width: '600px',
      height: '400px',
      data: { text: this.uploadedFile }
    });   
    dialogRef.afterClosed().subscribe(result => {
      this.uploadedFile = result;
   });
  }

    


}