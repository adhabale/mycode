// import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked,Output,EventEmitter } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators,FormArray} from '@angular/forms';
// import { StandardSanctionService } from './services/standard-sanction.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { GlobalService } from '../../common/services/global.service';
// var json = require('../../../../assets/i18n/en.json');

// @Component({
//   selector: 'app-standard-sanction',
//   templateUrl: './standard-sanction.component.html',
//   styleUrls: ['./standard-sanction.component.scss'],
// })
// export class StandardSanctionComponent implements OnInit {
//   durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];
//   sanctionedCountries: any[] = [{ "id": '1', "name": 'Russia' },
//   { "id": '2', "name": 'Iraq' },
//   { "id": '3', "name": 'Egypt' },
//   { "id": '4', "name": 'Afghanistan' },
//   { "id": '5', "name": 'Ukraine' }];

//   insuranceType: any[] = [{ "id": '1', "name": 'Liability' },
//   { "id": '2', "name": 'Property Damage' }];
//   businessAreas: string[] = ['Marine', 'Transportation'];
//   legalEntities: string[] = ['Willis limited', 'Tower watson limited'];
//   nationalities: string[] = ['UK', 'Russia', 'Iran'];
//   activityValue = 'Airport and aircraft buildings';
//   insuredName = 'ABC Airline';
//   insuredName1 = 'STR Airline';
//   premiums: string[] = ['GBP', 'HKD'];
//   claims: string[] = ['GBP', 'HKD'];

//   policyCover = '2';
//   usInvolved = '2';
//   usInvoledChecked = false;
//   usDecisions = '2';
//   usUnderwriters = '2';
//   controlledGoodsInvolvement = '2';
//   equipments = '2';
//   diamonds = '2';
//   hideBUBtn: boolean;
//   policyType: string;

//   fileName: string;
//   show = false;
//   @Input() public formReview: boolean;
//   @Output() insuranceReinsuranceData = new EventEmitter<FormArray>();
//   form:Form=new Form();
//   ///////////////////
//   standardSanctionForm: FormGroup;
//   jsonData: any;
//   stdSanctionForm: FormGroup;
 

//   // -------------Reactive form control------------

//   constructor(private formBuilder: FormBuilder, private standardSacntion: StandardSanctionService, private router: ActivatedRoute, private route: Router, private globalservice: GlobalService, private cdRef: ChangeDetectorRef) { }

//   ngOnInit() {
//     this.createForm();
//     this.policyType = "New Policy";
//     this.jsonData = json;
//     //this.insuranceReinsuranceData.emit(this.stdSanctionForm);

//   }


//   createForm() {
//     this.stdSanctionForm = this.formBuilder.group({

//       //  qOne: this.formBuilder.group({
//       //   id: 'q1',
//       //   text: json.standardsSanction.qOne.text,
//       //   answer: this.formBuilder.group({
//       //     businessArea: '',
//       //     officeLocation: '',
//       //     wtwEntity:''
//       //   })
//       // }),

//       qTwo: this.formBuilder.group({
//         id: 'q2',
//         text: json.standardsSanction.qTwo.text,
//         answer: this.formBuilder.group({
//           date: '',
//           duration: ''
//         })
//       }),
//       qFour: this.formBuilder.group({
//         id: 'q4',
//         text: json.standardsSanction.qFour.text,
//         answer: this.formBuilder.group({
//           sanctionedCountry:''
//         })
//       }),
//       qFive: this.formBuilder.group({
//         id: 'q5',
//         text: json.standardsSanction.qFive.text,
//         answer: new FormControl()
//       }),
//       qSix: this.formBuilder.group({
//         id: 'q6',
//         text: json.standardsSanction.qSix.text,
//         answer: new FormControl()
//       }),
//       qSeven: this.formBuilder.group({
//         id: 'q7',
//         text: json.standardsSanction.qSeven.text,
//         answer: new FormControl()
//       }),
//       qEight: this.formBuilder.group({
//         id: 'q8',
//         text: json.standardsSanction.qEight.text,
//         answer: new FormControl()
//       }),
//       qNine: this.formBuilder.group({
//         id: 'q9',
//         text: json.standardsSanction.qNine.text,
//         answer: new FormControl()
//       }),
//       qTen: this.formBuilder.group({
//         id: 'q10',
//         text: json.standardsSanction.qTen.text,
//         answer: new FormControl()
//       }),
//       qEleven: this.formBuilder.group({
//         id: 'q11',
//         text: json.standardsSanction.qEleven.text,
//         answer: this.formBuilder.group({
//           premiums: '',
//           claims: ''
//         })
//       }),
//       qTwelve: this.formBuilder.group({
//         id: 'q12',
//         text: json.standardsSanction.qTwelve.text,
//         answer: this.formBuilder.group({
//           isControlGoods: this.formBuilder.group({
//             id: 'q12.1',
//             text: json.standardsSanction.qTwelve.twelveSubOne.text,
//             answer: new FormControl()
//           }),
//           isDiamond: this.formBuilder.group({
//             id: 'q12.2',
//             text: json.standardsSanction.qTwelve.twelveSubTwo.text,
//             answer: new FormControl()
//           }),
//           isPetrolium:this.formBuilder.group({
//             id: 'q12.3',
//             text: json.standardsSanction.qTwelve.twelveSubThree.text,
//             answer: new FormControl()
//           }),
//         })
//       }),
//       qThirteen: this.formBuilder.group({
//         id: 'q13',
//         text: json.standardsSanction.qThirteen.text,
//         answer: new FormControl()
//       }),
//     })
   
//   }

//   getData(val){
//     console.log("i m coming from table data")
// let c:any[];
// val.forEach(element => {
// c=element;
// console.log(c);
// });


//   }


//   bindData() {
  

//     const countries: any[] = [
//       this.sanctionedCountries[0],
//       this.sanctionedCountries[1]
//     ]
//     const insuranceTyp: any[] = [
//       this.insuranceType[0],
//       this.insuranceType[1]
//     ]

//     const durationList = this.durations[3]
//     const premiumsList: any[] = [
//       this.premiums[0],
//       this.premiums[1]
//     ]
//     const claimsList: any[] = [
//       this.claims[0],
//       this.claims[1]
//     ]

//     const qTwoValues = { id: 'q2', text: json.standardsSanction.qTwo.text, answer: { date: '2019-01-02T00:00:00.000Z', duration: durationList } }
//     const qElevenValues = { id: 'q11', text: json.standardsSanction.qEleven.text, answer: { premiums: premiumsList, claims: claimsList } }
//     const qTwelveList = {
//       id: 'q12',
//       text: json.standardsSanction.qTwelve.text,
//       answer: {
//         isControlGoods: { id: 'q12.1', text: json.standardsSanction.qTwelve.twelveSubOne.text, answer: 'Yes' },
//         isDiamond: { id: 'q12.2', text: json.standardsSanction.qTwelve.twelveSubTwo.text, answer: 'No' },
//         isPetrolium:  { id: 'q12.3', text: json.standardsSanction.qTwelve.twelveSubThree.text, answer: 'No' }
//       }
//     }
//     this.stdSanctionForm.setValue({
//       qTwo: qTwoValues,
//       //this.form.questions[0],
//       qFour: { id: 'q4', text: json.standardsSanction.qFour.text, answer: countries },
//       qFive: { id: 'q5', text: json.standardsSanction.qFive.text, answer: insuranceTyp },
//       qSix: { id: 'q6', text: json.standardsSanction.qSix.text, answer: 'value' },
//       qSeven: { id: 'q7', text: json.standardsSanction.qSeven.text, answer: 'Global Placement' },
//       qEight: { id: 'q8', text: json.standardsSanction.qEight.text, answer: 'Yes' },
//       qNine: { id: 'q9', text: json.standardsSanction.qNine.text, answer: 'Yes' },
//       qTen: { id: 'q10', text: json.standardsSanction.qTen.text, answer: 'Yes' },
//       qEleven: qElevenValues,
//       qTwelve: qTwelveList,
//       qThirteen: { id: 'q13', text: json.standardsSanction.qThirteen.text, answer: 'value' },
//     })


//     console.log(this.stdSanctionForm.value);
//   }

//   qEightAnswer() {
//     const c = this.stdSanctionForm.controls['qEight']
//     /// console.log(c.value.answer);
//     return c.value.answer;
//   }
//   qNineAnswer() {
//     const c = this.stdSanctionForm.controls['qNine']
//     //console.log(c.value.answer);
//     return c.value.answer;
//   }

//   qTenAnswer() {
//     const c = this.stdSanctionForm.controls['qTen']
//     //console.log(c.value.answer);
//     return c.value.answer;
//   }
//   onSave() {
//     const result: any = this.standardSanctionForm.value;
//     console.log("reactive Form==>", result);
//   }

//   showInfo() {
//     (<any>$('[data-toggle="popover"]')).popover({
//       trigger: 'focus'
//     });
//   }
//   preview(event) {
//     console.log(event);
//     // var file: string;
//     // var ch='\';
//     // file = event.srcElement.value;
//     // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
//     this.fileName = event.srcElement.value;
//   }

//   connectForm() {
//     this.standardSacntion.setConnectForm(true);
//   }
//   checkUser(val) {
//     let param;
//     this.router.params.subscribe(params => {
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
//     this.route.navigate(['my-workqueue']);
//     window.scrollTo(0, 0);
//   }
//   isSubmitted() {
//     if (this.globalservice.user.value == 'Sanction User')
//       return true;
//     else
//       return false;
//   }


//       c:FormArray;
//       finalValue:FormArray
//   createModel(){
//     this.form.title='Standard Sanction';
//     // let q1 = new Question();
//     let q2 = new Question();
//     // let q3 = new Question();
//     let q4 = new Question();
//     let q5 = new Question();
//     let q6 = new Question();
//     let q7 = new Question();
//     let q8 = new Question();
//     let q9 = new Question();
//     let q10 = new Question();
//     let q11 = new Question();
//     let q12 = new Question();
//     let q13 = new Question();

    
//     q2=this.stdSanctionForm.controls['qTwo'].value;
//     // q3=this.stdSanctionForm.controls['qThree'].value.answer;
//     q4=this.stdSanctionForm.controls['qFour'].value;
//     q5=this.stdSanctionForm.controls['qFive'].value;
//     q6=this.stdSanctionForm.controls['qSix'].value;
//     q7=this.stdSanctionForm.controls['qSeven'].value;
//         q8=this.stdSanctionForm.controls['qEight'].value;
//     q9=this.stdSanctionForm.controls['qNine'].value;
//     q10=this.stdSanctionForm.controls['qTen'].value;
//     q11=this.stdSanctionForm.controls['qEleven'].value;
//     q12=this.stdSanctionForm.controls['qTwelve'].value;
//     q13=this.stdSanctionForm.controls['qThirteen'].value;

//     // this.form.questions.push(q1);
//     this.form.questions.push(q2);
//     // this.form.questions.push(q3);
//     this.form.questions.push(q4);
//     this.form.questions.push(q5);
//     this.form.questions.push(q6);
//     this.form.questions.push(q7);
//     this.form.questions.push(q8);
//     this.form.questions.push(q9);
//     this.form.questions.push(q10);
//     this.form.questions.push(q11);
//     this.form.questions.push(q12);
//     this.form.questions.push(q13);
    
//       console.log(this.form.questions)
   
//     this.c=this.formBuilder.array([]);
//     //this.c.push()
//   this.finalValue=this.grp(this.form.questions)

//   }

//   grp(val){
//    console.log(val)
//    val.forEach(item=>{
//      let d=this.formBuilder.group({
//       id:item.id,
//       text:item.text,
//       answer:item.answer
//         })
//     this.c.push(d);
//    })
//     return this.c;
//   }
//   onSubmit(){
//       this.createModel();
//   this.insuranceReinsuranceData.emit(this.finalValue)
//   }



//   /////////////////////////////////////////////////////////////////

 
// }
//  export class Form
// {
//     title: string;
//    questions: Question[]=[]
// }
//    export class Question
// {
//   id: string;
//    text: string;
//    answer: any;
// }

import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,FormArray } from '@angular/forms';
import { StandardSanctionService } from './services/standard-sanction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../common/services/global.service';
import { UploadDocComponent } from '../standard-sanction/upload-doc/upload-doc.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare const require: any;
var json = require('../../../../assets/i18n/en.json'); 

@Component({
  selector: 'app-standard-sanction',
  templateUrl: './standard-sanction.component.html',
  styleUrls: ['./standard-sanction.component.scss']
})
export class StandardSanctionComponent implements OnInit {
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];
sanctionedCountries: any[] = [{ "id": '1', "name": 'Russia' },
  { "id": '2', "name": 'Iraq' },
  { "id": '3', "name": 'Egypt' },
  { "id": '4', "name": 'Afghanistan' },
  { "id": '5', "name": 'Ukraine' }];
 insuranceType: any[] = [{ "id": '1', "name": 'Liability' },
 { "id": '2', "name": 'Property Damage' }]; 
  businessAreas: string[] = ['Marine', 'Transportation'];
  legalEntities: string[] = ['Willis limited', 'Tower watson limited'];
  nationalities: string[] = ['UK', 'Russia', 'Iran'];
  activityValue = 'Airport and aircraft buildings';
  insuredName = 'ABC Airline';
  insuredName1 = 'STR Airline';
  premiums: string[] = ['GBP', 'HKD'];
  claims: string[] = ['GBP', 'HKD'];

  policyCover = '2';
  usInvolved = '2';
  usInvoledChecked = false;
  usDecisions = '2';
  usUnderwriters = '2';
  controlledGoodsInvolvement = 'No';
  equipments = '2';
  diamonds = '2';
  hideBUBtn: boolean;
  policyType: string;

  fileName: string;
  show = false;
  insuranceReinsuranceGroup: FormGroup;
 qThreeValue:any;
 @Input() masterObject;
  @Input() public formReview: boolean;
  @Output() insuranceReinsuranceData = new EventEmitter<FormArray>();

  constructor(private standardSacntion: StandardSanctionService, private router: ActivatedRoute, private route: Router, private globalservice: GlobalService, private cdRef: ChangeDetectorRef, public dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.policyType = "New Policy";
    // this.insuranceReinsuranceGroup = this._formBuilder.group({
    //   insuranceReinsurance: this._formBuilder.array([
    //     this._formBuilder.group({
    //       id:'q2',
    //       text:json.standardsSanction.qTwo.text,
    //       answer:this._formBuilder.group({
    //         inceptionDate: [''],
    //         duration: ['']
    //       })
    //     }),
    //     this._formBuilder.group({
    //       id:'q4',
    //       text:json.standardsSanction.qTwo.text,
    //       answer:this._formBuilder.group({
    //         insuranceTypes: ['']
    //       })
         
    //     }),
    //   ])
    //   // sanctionedCountry: [''],
    //   // activity: [''],
    //   // policyCover: [''],
    //   // usInvolved: [''],
    //   // usDecisions: [''],
    //   // usUnderwriters: [''],
    //   // premiumValue: [''],
    //   // claimValue: [''],
    //   // controlledGoodsInvolvement: [''],
    //   // diamonds: [''],
    //   // equipments: ['']
    // });
    this.createForm();
 this.onChanges();
 console.log("master data")
 console.log(this.masterObject)
    this.insuranceReinsuranceData.emit(this.insuranceReinsuranceGroup.controls['insuranceReinsurance'] as FormArray);
     

  }

  submit(){
    this.insuranceReinsuranceGroup.setValue({
      formArray:[{ id: 'q2', text: json.standardsSanction.qTwo.text, answer: { inceptionDate: '2019-01-02T00:00:00.000Z', duration: '1 year policy' } }]
    });
  }

  // ngAfterViewChecked() {
  //   let show = this.isSubmitted();
  //   if (show != this.show) { 
  //     this.show = show;
  //     this.cdRef.detectChanges();
  //   }
  // }
  showInfo() {
    (<any>$('[data-toggle="popover"]')).popover({
      trigger: 'focus'
    });
  }
  preview(event) {
    //console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;
  }

  connectForm() {
    this.standardSacntion.setConnectForm(true);
  }
  checkUser(val) {
    let param;
    this.router.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      val.form.disable();
      this.hideBUBtn = true;
    }
  }
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User')
      return true;
    else
      return false;
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
  // onSubmit() {
  //   const dialogRef = this.dialog.open(SuccessModalComponent, {
  //     width: '300px',

  //   });

  // }
 bind(){
let fArray = this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[2].answer;
while(fArray.length !=0)
  {fArray.pop(0)}//reset array

   this.qThreeValue.forEach(element => {
 this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[2].answer.push(element.value);
});
 }
 
getData(val){
// console.log("i m coming from table data")
// let c:any[];
// val.forEach(element => {
// c=element
// });
// console.log(c)
// this.qThreeValue=c


//  console.log("*****************")
// console.log(val)
// val.forEach(element => {
//   console.log(element.value)
//  this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[2].answer.push(element.value);
// });
// console.log('element')
// console.log(this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[2].answer)
this.qThreeValue=val;
this.bind();
  }

   qEightAnswer() {
    const c = this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[7].answer
     if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
  }
  
    qNineAnswer() {
    const c = this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[8].answer
      if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
  }

  qTenAnswer(val) {
  const c = this.insuranceReinsuranceGroup.controls['insuranceReinsurance'].value[9].answer;
   if(c.boolean=='Yes'){return true}
   else{
     c.textarea=''
     return false
   }
 
  }

   createForm() {
    this.insuranceReinsuranceGroup = this._formBuilder.group({
      insuranceReinsurance: this._formBuilder.array([
        
        this._formBuilder.group({
        id: 'q1',
        text: json.standardsSanction.qOne.text,
        answer: this._formBuilder.group({
          businessArea: '',
          officeLocation: '',
          wtwEntity:''
        })
      }),

       this._formBuilder.group({
        id: 'q2',
        text: json.standardsSanction.qTwo.text,
        answer: this._formBuilder.group({
          date: '',
          duration: ''
        })
      }),

        this._formBuilder.group({
        id: 'q3',
        text: json.standardsSanction.qThree.text,
        answer: this._formBuilder.array([])
      
      }),
       this._formBuilder.group({
        id: 'q4',
        text: json.standardsSanction.qFour.text,
        answer: this._formBuilder.group({
          sanctionedCountry:''
        })
      }),
       this._formBuilder.group({
        id: 'q5',
        text: json.standardsSanction.qFive.text,
        answer: new FormControl()
      }),
       this._formBuilder.group({
        id: 'q6',
        text: json.standardsSanction.qSix.text,
        answer: new FormControl()
      }),
       this._formBuilder.group({
        id: 'q7',
        text: json.standardsSanction.qSeven.text,
        answer: new FormControl()
      }),
       this._formBuilder.group({
        id: 'q8',
        text: json.standardsSanction.qEight.text,
        answer: this._formBuilder.group({
          boolean:'',
          textarea:''
        })
      }),
       this._formBuilder.group({
        id: 'q9',
        text: json.standardsSanction.qNine.text,
        answer: this._formBuilder.group({
          boolean:'',
          textarea:''
        })
      }),
      this._formBuilder.group({
        id: 'q10',
        text: json.standardsSanction.qTen.text,
        answer: this._formBuilder.group({
          boolean:'',
          textarea:''
        })
      }),
       this._formBuilder.group({
        id: 'q11',
        text: json.standardsSanction.qEleven.text,
        answer: this._formBuilder.group({
          premiums: '',
          claims: ''
        })
      }),
       this._formBuilder.group({
        id: 'q12',
        text: json.standardsSanction.qTwelve.text,
        answer: this._formBuilder.group({
          isControlGoods: this._formBuilder.group({
            id: 'q12.1',
            text: json.standardsSanction.qTwelve.twelveSubOne.text,
            answer: new FormControl()
          }),
          isDiamond: this._formBuilder.group({
            id: 'q12.2',
            text: json.standardsSanction.qTwelve.twelveSubTwo.text,
            answer: new FormControl()
          }),
          isPetrolium:this._formBuilder.group({
            id: 'q12.3',
            text: json.standardsSanction.qTwelve.twelveSubThree.text,
            answer: new FormControl()
          }),
        })
      }),
       this._formBuilder.group({
        id: 'q13',
        text: json.standardsSanction.qThirteen.text,
        answer: new FormControl()
      }),
      ])
    })
    
  }

formData:FormGroup;
  onChanges(): void {
  //  console.log(this.masterObject)
  this.masterObject.valueChanges.subscribe(val => {
   this.formData=val;
   console.log('std sanction on changes method')
   console.log(this.formData)
  });
}
 
// isCheckedValue:boolean;
// isChecked(val){
// if(val=='Yes'){
// this.isCheckedValue=true}
// else{this.isCheckedValue=false}

// }
}


