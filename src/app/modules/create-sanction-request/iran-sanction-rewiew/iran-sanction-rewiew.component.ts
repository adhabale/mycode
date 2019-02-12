import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IranSanctionsComponent } from '../../SanctionForms/iran-sanctions/iran-sanctions.component';

@Component({
  selector: 'app-iran-sanction-rewiew',
  templateUrl: './iran-sanction-rewiew.component.html',
  styleUrls: ['./iran-sanction-rewiew.component.scss']
})
export class IranSanctionRewiewComponent implements OnInit {
  hideBUBtn: boolean;
  @Input() public formReview: boolean;
  constructor( private router: ActivatedRoute,private route: Router) { }


  ELEMENT_DATA: any[] = [
    { BusinessArea: 'Marine – GB', Officelocation: 'London', WTWLegalEntity: 'Willis Towers Watson Consulting'}
  ];

  ELEMENT_DATA1: any[] = [
    {Name:'UN', NationalityPlaceofincorporation:'Switzerland'}
  ];

  displayedColumns: string[] = ['BusinessArea', 'Officelocation','WTWLegalEntity'];
  dataSource = this.ELEMENT_DATA;

  displayedColumns1: string[] = ['Name','NationalityPlaceofincorporation'];
  dataSource1 = this.ELEMENT_DATA1;

  ngOnInit() {
    // console.log(this.ELEMENT_DATA);
   

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

}
