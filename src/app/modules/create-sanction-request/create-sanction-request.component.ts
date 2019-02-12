import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-sanction-request',
  templateUrl: './create-sanction-request.component.html',
  styleUrls: ['./create-sanction-request.component.scss']
})
export class CreateSanctionRequestComponent implements OnInit {
  @Input() createSanctionData;
  sanctionActiviytTypes: string[] = ['Quote', 'Placement', 'Claim', 'Consultancy', 'Payments'];
  sanctionTypes: string[] = ['Insurance or Reinsurance Form', 'Iran Transactions Form', 'Controlled Goods Form'];
  sanctionedCountries: string[] = ['Russia', 'Iran', 'Egypt', 'Afghanistan', 'Ukraine'];
  sanctionTemplate: string;
  ukraineExposure: boolean = false;
  sanctionForms: string[] = [];
  sanctionList: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    if(this.createSanctionData){
this.createSanctionGroup=this.createSanctionData
    }
   }
name;
   wow(ccc){
     console.log(ccc)
   }
  createSanctionGroup = this.formBuilder.group({
    sanctionActivityType: ['Quote'],
    policyType: ['New Policy'],
    policyNumber: [''],
    claimDate: [''],
    claimDetails: [''],
    sanctionFormType: [''],
    sanctionedCountry: [''],
    crimeaExposure: ['No'],
    controlledGoodsInvolvement: 'No',
    sanctionList: this.formBuilder.group({})
  });

  get sanctionActivityType() {
    return this.createSanctionGroup.get('sanctionActivityType')
  }
  get policyType() {
    return this.createSanctionGroup.get('policyType')
  }
  get sanctionFormType() {
    return this.createSanctionGroup.get('sanctionFormType')
  }
  get sanctionedCountry() {
    return this.createSanctionGroup.get('sanctionedCountry')
  }
  get controlledGoodsInvolvement() {
    return this.createSanctionGroup.get('controlledGoodsInvolvement')
  }
  ngOnInit() {
    this.onChanges();
  }
  formInitialized(name: string, form: any) {
    // this.createSanctionGroup.setControl(name, form);
    //this.createSanctionGroup.controls[form.value].setParent(this.createSanctionGroup);
    //this.createSanctionGroup.get('sanctionList').value.push(form.value);
    //this.createSanctionGroup.get('sanctionList').value.setControl(name, form);
    //sanction:FormGroup= this.createSanctionGroup.controls['sanctionList'];
    (this.createSanctionGroup.get('sanctionList')as FormGroup).setControl(name,form);
 

  }
  navigateTo(activityType, sanctionedCountriesList: string[], controlledGoodsInvolvement) {
    console.log(this.createSanctionGroup.value);
    if (activityType == 'Insurance or Reinsurance Form' &&
      sanctionedCountriesList.includes('Iran') && controlledGoodsInvolvement == 'Yes') {
      this.sanctionForms.push('Insurance or Reinsurance Form');
      this.sanctionForms.push('Iran Transactions Form');
      this.sanctionForms.push('Controlled Goods Form');
      this.sanctionTemplate = "standardSanction";
    }
    else if (activityType == 'Insurance or Reinsurance Form' && sanctionedCountriesList.includes('Iran')) {
      this.sanctionForms.push('Insurance or Reinsurance Form');
      this.sanctionForms.push('Iran Transactions Form');
      this.sanctionTemplate = "standardSanction";
    }
    else if (activityType == 'Insurance or Reinsurance Form' && controlledGoodsInvolvement == 'Yes') {
      if (!this.sanctionForms.includes('Insurance or Reinsurance Form')) {
        this.sanctionForms.push('Insurance or Reinsurance Form');
        this.sanctionForms.push('Controlled Goods Form');
      }
      this.sanctionTemplate = "standardSanction";
    }
    else if (activityType == 'Insurance or Reinsurance Form' && controlledGoodsInvolvement == 'No') {
      if (!this.sanctionForms.includes('Insurance or Reinsurance Form'))
        this.sanctionForms.push('Insurance or Reinsurance Form');
      if (this.sanctionForms.includes('Controlled Goods Form')) {
        const index = this.sanctionForms.indexOf('Controlled Goods Form')
        this.sanctionForms.splice(index, 1);
      }
      this.sanctionTemplate = "standardSanction";
    }

    else if (activityType == 'Iran Transactions Form') {
      this.sanctionForms.push('Iran Transactions Form');
      this.sanctionTemplate = "iranSanction";
    }
    else if (activityType == 'Controlled Goods Form') {
      this.sanctionForms.push('Controlled Goods Form');
      this.sanctionTemplate = "controlledGoods";
    }

    

  }
  checkUkraine(sanctionedCountryList: string[]) {
    this.ukraineExposure = false;
    if (sanctionedCountryList.includes('Ukraine'))
      this.ukraineExposure = true;
  }


  assignData(){

let data:any={
claimDate: "",
claimDetails: "",
controlledGoodsInvolvement: "Yes",
crimeaExposure: "No",
policyNumber: "",
policyType: "New Policy",
sanctionActivityType: "Placement",
sanctionFormType: "Insurance or Reinsurance Form",
sanctionList:{
  insuranceReinsurance: [
{
answer: {businessArea: "", officeLocation: "", wtwEntity: ""},
id: "q1",
text: "What is the name of your legal entity, business area and the office location?"
},
{
answer: {date: "Fri Feb 08 2019 00:00:00 GMT+0530 (India Standard Time)", duration: "-1 year policy"},
id: "q2",
text: "Date the policy will incept and the duration of the policy",
}
]
},
sanctionedCountry: ["Russia"]
  }

 this.createSanctionGroup.get('sanctionActivityType').setValue(data.sanctionActivityType)


  }



  onChanges(): void {
  this.createSanctionGroup.valueChanges.subscribe(val => {
   // this.createSanctionGroup.get('sanctionActivityType').patchValue(val)
   console.log("on changes create sanction")
   console.log(val)
  });
}
}