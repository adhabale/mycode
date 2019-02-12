import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultancy-services',
  templateUrl: './consultancy-services.component.html',
  styleUrls: ['./consultancy-services.component.scss']
})
export class ConsultancyServicesComponent implements OnInit {

  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];
  placeholder: string = "Sanctioned countries";
  currencies: string[] = ['GBP', 'HKD'];
  fileName: string;
  @Input() public formReview: boolean;
  hideBUBtn: boolean = false;

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;
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
    else if (this.formReview)
      val.form.disable();
  }
}
