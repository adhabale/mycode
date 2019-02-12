// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { StandardSanctionService } from '../standard-sanction/services/standard-sanction.service';
// import { GlobalService } from '../../common/services/global.service';

// import { FormBuilder, FormGroup,FormArray } from '@angular/forms';

// import * as $ from 'jquery';

// @Component({
//   selector: 'app-controlled-goods',
//   templateUrl: './controlled-goods.component.html',
//   styleUrls: ['./controlled-goods.component.scss']
// })
// export class ControlledGoodsComponent implements OnInit {

//   policyType: string;
//   sourceCountries: any[] = [{ "id": '1', "name": 'Russia'},
//   { "id": '2', "name": 'Iraq'}];
//   fileName: string;
//   goodsSource: string = null;
//   amendment: boolean = false;
//   id = null;
//   fromParent: boolean;
//   hideBUBtn: boolean;
//   @Input() public formReview: boolean;
//   heroForm: FormGroup; 
// tableForm:FormGroup;

// tempData=[{itemname:"Russia",itemplace:"xxx"}]

//   constructor(private route: ActivatedRoute,private fb: FormBuilder,
//     private standardSacntion: StandardSanctionService, private router: Router, private globalservice: GlobalService) { 

     
      
//     }

// createForm(){//amu
//   //   this.tableForm=this.fb.group({
//   //   itemRows: this.fb.array([this.initItemRows()]) // here
//   // })

//      this.heroForm = this.fb.group({
//       qOne: 'ammu', // <--- the FormControl called "name"

//       qTwo:this.fb.group({
//               answer:this.sourceCountries[0]
//       }),

//         qThree:this.fb.group({
//              qThree1:{
//                id:'',
//                name:'',
//                answer:'xxx'
//              }
//       }),

//     qOne1:this.fb.array([this.initItemRows()])


//     });

    
// }

// initItemRows() {//amu//check condition if data is there??

// //   if(this.tempData){
// //  return this.fb.group({
// //         itemname: this.tempData[0].itemname,
// //         itemplace:this.tempData[0].itemplace
// //     });
// //   }
// // else{
//     return this.fb.group({
//         // list all your form controls here, which belongs to your form array
//         itemname: [''],
//         itemplace:['']
//     });
// //}
// }

// addNewRow() {//amu
//     // control refers to your formarray
//    // const control = <FormArray>this.tableForm.controls['itemRows'];
//     const c=<FormArray>this.heroForm.controls['qOne1']
//     // add new formgroup
//     c.push(this.initItemRows());
//   //  control.push(this.initItemRows());
// }

// deleteRow(index: number) {//amu
//     // control refers to your formarray
//   //  const control = <FormArray>this.tableForm.controls['itemRows'];
//         const c=<FormArray>this.heroForm.controls['qOne1']

//     // remove the chosen row
//   //  control.removeAt(index);
//     c.removeAt(index)
// }

//   ngOnInit() {

//      this.createForm();//amu
//     this.policyType = "New Policy";
//     this.goodsSource = null;
//     this.fromParent = false;
//     this.id = parseInt(this.route.snapshot.paramMap.get('id'));
//     if (Number.isNaN(this.id))
//       this.amendment = false;
//     else
//       this.amendment = true;
//     if (this.standardSacntion.getConnectForm()) {
//       this.fromParent = true;
//     }
//   }

//   // showInfo() {
//   //   (<any>$('[data-toggle="popover"]')).popover({
//   //     trigger: 'focus'
//   //   });
//   // }
//   preview(event) {
//     console.log(event);
//     // var file: string;
//     // var ch='\';
//     // file = event.srcElement.value;
//     // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
//     this.fileName = event.srcElement.value;
//   }

//   backToParent() {
//     this.standardSacntion.setConnectForm(false);
//     if (this.amendment)
//       this.router.navigateByUrl('my-workqueue');
//     else
//       this.router.navigateByUrl('standard-sanction');
//   }

//   checkUser(val) {
//     let param;
//     this.route.params.subscribe(params => {
//       param = params
//     });
//     if (param.user) {
//       val.form.disable();
//       this.hideBUBtn = true;
//     }
//     else if (this.formReview)
//       val.form.disable();
//   }


//   onCancel() {
//     this.router.navigate(['my-workqueue']);
//     window.scrollTo(0, 0);
//   }

//   //<!--for sanction user-->
//   isSubmitted() {
//     if (this.globalservice.user.value == 'Sanction User') {
//       return true
//     }
//     else { return false }
//   }

  
// }



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandardSanctionService } from '../standard-sanction/services/standard-sanction.service';
import { GlobalService } from '../../common/services/global.service';
import { UploadDocComponent } from '../standard-sanction/upload-doc/upload-doc.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
var json = require('../../../../assets/i18n/en.json');

@Component({
  selector: 'app-controlled-goods',
  templateUrl: './controlled-goods.component.html',
  styleUrls: ['./controlled-goods.component.scss']
})
export class ControlledGoodsComponent implements OnInit {

  policyType: string;
  sourceCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  fileName: string;
  goodsSource: string = null;
  amendment: boolean = false;
  id = null;
  fromParent: boolean;
  hideBUBtn: boolean;

  controlledGoodsGroup: FormGroup;
  @Input() public formReview: boolean;
  @Output() insuranceReinsuranceData = new EventEmitter<FormGroup>();

  constructor(private route: ActivatedRoute,
    private standardSacntion: StandardSanctionService, private router: Router, private globalservice: GlobalService, public dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.policyType = "New Policy";
    this.goodsSource = null;
    this.fromParent = false;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (Number.isNaN(this.id))
      this.amendment = false;
    else
      this.amendment = true;
    if (this.standardSacntion.getConnectForm()) {
      this.fromParent = true;
    }

    this.controlledGoodsGroup = this._formBuilder.group({
      controlledGoods: this._formBuilder.array([
        this._formBuilder.group({
          id: 'q1',
          answer: this._formBuilder.group({
            goodsDetail: ['']
          })
        }),
        this._formBuilder.group({
          id: 'q1',
          answer: this._formBuilder.group({
            goodsSource: ['']
          })
        }),
      ])
    });
    this.insuranceReinsuranceData.emit(this.controlledGoodsGroup);
  }

  // showInfo() {
  //   (<any>$('[data-toggle="popover"]')).popover({
  //     trigger: 'focus'
  //   });
  // }
  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;
  }

  backToParent() {
    this.standardSacntion.setConnectForm(false);
    if (this.amendment)
      this.router.navigateByUrl('my-workqueue');
    else
      this.router.navigateByUrl('standard-sanction');
  }

  checkUser(val) {
    let param;
    this.route.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      val.form.disable();
      this.hideBUBtn = true;
    }
    else if (this.formReview)
      val.form.disable();
  }


  onCancel() {
    this.router.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
  }

  //<!--for sanction user-->
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User') {
      return true
    }
    else { return false }
  }

  uploadedFile;
  uploadFile() {
    const dialogRef = this.dialog.open(UploadDocComponent, {
      width: '600px',
      height: '500px',
      data: { text: this.uploadedFile }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.uploadedFile = result;
    });
  }
}
