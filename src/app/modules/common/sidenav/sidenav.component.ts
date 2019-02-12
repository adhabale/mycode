import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }
  isSanctionUser() {
    if (this.globalService.user.value == "Sanction User") {
      return true;
    }
    else { return false }
  }
}
