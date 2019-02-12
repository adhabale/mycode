import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-multi-select-with-preview',
  templateUrl: './multi-select-with-preview.component.html',
  styleUrls: ['./multi-select-with-preview.component.scss']
})
export class MultiSelectWithPreviewComponent {
  visible = true;
  selectable = true;
  removable = true;
  mulitSelectCtrl = new FormControl();
  selectedValues: string[] = [];
  showPreview: boolean = false;

  @Input() public list;
  @Input() public placeholder;
  constructor() { }

  add(event: MatChipInputEvent): void {
    if (this.selectedValues.length > -1)
      this.showPreview = true;
    else
      this.showPreview = false;
    this.selectedValues = [];
    const value = event.value;
    if (value.length > 1) {
      for (var i = 0; i < value.length; i++) {
        if (this.selectedValues.indexOf(value[i]) < 0)
          this.selectedValues.push(value[i]);
      }
    }
    else
      this.selectedValues.push(value);
  }
  remove(fruit: string): void {
    const index = this.selectedValues.indexOf(fruit);
    this.mulitSelectCtrl.value.splice(index, 1);
    if (index >= 0) {
      this.selectedValues.splice(index, 1);
      this.mulitSelectCtrl.setValue(this.mulitSelectCtrl.value);
    }
    if (this.selectedValues.length > 0)
      this.showPreview = true;
    else
      this.showPreview = false;
  }
}
