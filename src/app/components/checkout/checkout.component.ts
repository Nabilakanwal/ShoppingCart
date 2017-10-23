import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checked = false;
  displayPswrdField : Boolean  = false;

  countries = [
    {value: 'Pakistan-0', viewValue: 'Pakistan'},
    {value: 'China-1', viewValue: 'China'},
    {value: 'USA-2', viewValue: 'USA'},
    {value: 'India-3', viewValue: 'India'},
    {value: 'KSA-4', viewValue: 'KSA'},
    {value: 'Japan-5', viewValue: 'Japan'}
  ];
  states = [
    {value: 'Sindh-0', viewValue: 'Sindh'},
    {value: 'Punjab-1', viewValue: 'Punjab'},
    {value: 'Balochistan-2', viewValue: 'Balochistan'},
    {value: 'Khyber-3', viewValue: 'Khyber Pakhtunkhwa'}
  ];

  constructor() {
    console.log("ChecOut constructor Work");
    
    
   }

  

  onChkboxChange(eve: any) {
    this.displayPswrdField = !this.displayPswrdField;
  }


   onSubmitBilling(formValue) {
    console.log("save Billing detail: ", formValue);
  }

  ngOnInit() {
  }

}
