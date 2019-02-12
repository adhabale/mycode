import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../common/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iran-sanctions',
  templateUrl: './iran-sanctions.component.html',
  styleUrls: ['./iran-sanctions.component.scss']
})
export class IranSanctionsComponent implements OnInit {

  policyType: string;
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];
  reInsuranceServicesList: string[] = ['Marine Cargo', 'K&R', 'health and benefits advisory'];
  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  currencies: string[] = ['GBP', 'HKD'];
  insuranceTypes: string[] = ['N/A', 'Reinsurance', 'Facultative', 'Treaty'];
  iranianConsignees: string[] = ['N/A', 'Consignees A', 'Charterers A', 'Consignees A'];
  fileName: string;
  hideBUBtn: boolean;
  @Input() public formReview: boolean;
   @Input() public parentObj : string;  

  constructor(private globalservice: GlobalService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.policyType = "New Policy";
    console.log(this.parentObj);
    console.log(this.formReview);
  }
  preview(event) {
    console.log(event);
    
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;
  }
  checkUser(form1, form2, form3, form4, form5) {
    let param;
    this.router.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      form1.form.disable();
      form2.form.disable();
      form3.form.disable();
      form4.form.disable();
      form5.form.disable();
      this.hideBUBtn = true;
    }
    else if (this.formReview) {
      form1.form.disable();
      form2.form.disable();
      form3.form.disable();
      form4.form.disable();
      form5.form.disable();
    }
  }
  onCancel() {
    this.route.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
  }
  //<!--for sanction user-->
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User') {
      return true
    }
    else { return false }
  }
}
