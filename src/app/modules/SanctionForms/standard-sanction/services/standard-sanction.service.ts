import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandardSanctionService {

  private connectForm = false;
  constructor() { }

  setConnectForm(value: boolean) {
    this.connectForm = value;
  }

  getConnectForm() {
    return this.connectForm;
  }
}
