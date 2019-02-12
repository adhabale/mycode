import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
 entityName: string;
  description: string;
  buName:string;
}

@Component({
  selector: 'app-edit-bu',
  templateUrl: './edit-bu.component.html',
  styleUrls: ['./edit-bu.component.scss']
})
export class EditBuComponent implements OnInit {
  animal: string;
  name: string;

  constructor( public dialogRef: MatDialogRef<EditBuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
