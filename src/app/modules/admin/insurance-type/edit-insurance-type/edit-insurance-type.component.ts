import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-edit-insurance-type',
  templateUrl: './edit-insurance-type.component.html',
  styleUrls: ['./edit-insurance-type.component.scss']
})
export class EditInsuranceTypeComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<EditInsuranceTypeComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
