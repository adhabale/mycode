import { Component, OnInit,Input,Output,EventEmitter,AfterViewInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: [ './custom-table.component.css' ]
})
    export class CustomTableComponent implements  OnInit ,AfterViewInit {
    
      @Input() columns;
      @Output() sendData = new EventEmitter<any[]>();
      @Input() control: FormControl;

      sourceCountries: any[] = [{ "id": '1', "name": 'Russia'}];
      countries: any =  this.sourceCountries[0]
    
      data1:any[]=[{name:'1',nationality:{answer:this.countries}}];
      
     
      dataSource = new BehaviorSubject<AbstractControl[]>([]);
      displayDualColumns = ['btn','name', 'nationality'];


      rows: FormArray = this.fb.array([]);
      form: FormGroup = this.fb.group({ 'table': this.rows });



     
      constructor(private fb: FormBuilder) { }

      ngAfterViewInit(){
      // You should see the actual form control properties being passed in
      console.log('control',this.control);
   }
      ngOnInit() {
       this.data1.forEach((d: any) => this.addRow(d, false));
     
        this.form.setValue({table:this.data1});
        this.updateView();
       // this.send()
        console.log(this.columns);
              console.log('control',this.control);

      }

      remove(i) {
               console.log('delete called')

          this.rows.removeAt(i);
        
        this.updateView(); 
     this.send()
      }

      addRow(d?: any, noUpdate?: boolean) {
        console.log('called')
        const row = this.fb.group({
          name  : '',
          nationality: this.fb.group({
           answer:new FormControl()
          })
        });
        this.rows.push(row);
        if (!noUpdate) { 
          this.updateView(); 
 }
this.send();
      }


      updateView() {
        this.dataSource.next(this.rows.controls);
       //this.send(); 

      }
      
     send(){
       console.log("jjjjjjjjjjjj")
       console.log(this.dataSource.getValue())
       this.sendData.emit(this.dataSource.value)
     }
    
    
    
    }
