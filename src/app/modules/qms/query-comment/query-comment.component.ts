import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material';
import { UploadDocComponent } from '../../SanctionForms/standard-sanction/upload-doc/upload-doc.component';

@Component({
  selector: 'app-query-comment',
  templateUrl: './query-comment.component.html',
  styleUrls: ['./query-comment.component.scss']
})
export class QueryCommentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  uploadedFile;
  uploadFile() {
    const dialogRef = this.dialog.open(UploadDocComponent, {
      width: '600px',
      height: '400px',
      data: { text: this.uploadedFile }
    });   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.uploadedFile = result;
   });
  }

}
