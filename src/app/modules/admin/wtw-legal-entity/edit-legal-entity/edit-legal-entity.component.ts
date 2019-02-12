import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  entityName: string;
  descriptions: string;
}

@Component({
  selector: 'app-edit-legal-entity',
  templateUrl: './edit-legal-entity.component.html',
  styleUrls: ['./edit-legal-entity.component.scss']
})
export class EditLegalEntityComponent implements OnInit {
  
  constructor( public dialogRef: MatDialogRef<EditLegalEntityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
