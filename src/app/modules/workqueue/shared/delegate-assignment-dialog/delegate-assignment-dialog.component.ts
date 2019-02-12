import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { delegateAssignmentDialogData } from '../entities/delegateAssignmentDialogData';
@Component({
  selector: 'app-delegate-assignment-dialog',
  templateUrl: './delegate-assignment-dialog.component.html',
  styleUrls: ['./delegate-assignment-dialog.component.scss']
})
export class DelegateAssignmentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelegateAssignmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: delegateAssignmentDialogData) { }

  names = ['Amruta Dhabale', 'Avinash Yadav', 'Rahul Jadhav']
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
