import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}


export interface DialogData {
  animal: 'country';
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit  {


  myControl = new FormControl();
  options: User[] = [
    {name: 'PokaleAs'},
    {name: 'BorkarAs'},
    {name: 'JagdavR'},
    {name: 'VishnuRT'},
    {name: 'PawarGS'}
  ];
  filteredOptions: Observable<User[]>;
  
  dataItem: any;

  Country: string;
  role: string;
  status: string;
  businessArea: string;
  firstName: string;
  lastName: string;
  email: string;
displayname: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataItem = data;
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  countries: string[] = ['India','Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  BusinessArea: string[] = ['CRB(GB)', 'None ',];
  Role: string[] = ['Admin', 'Sanctions','Business','Reports',];
  Status: string[] = ['Active','Inactive',];

 ngOnInit() {  


  this.filteredOptions = this.myControl.valueChanges
  .pipe(
    startWith<string | User>(''),
    map(value => typeof value === 'string' ? value : value.name),
    map(name => name ? this._filter(name) : this.options.slice())
  );

    if (this.dataItem) {    
      console.log(this.dataItem);
      this.Country = this.dataItem.Country;
      this.role = this.dataItem.Role;
      this.status = this.dataItem.status;
      this.businessArea = this.dataItem.businessArea;
      this.firstName = this.dataItem.FirstName;
      this.lastName = this.dataItem.LastName;
      this.email = this.dataItem.Email;
      this.displayname = this.dataItem.DisplayName;
    }
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
