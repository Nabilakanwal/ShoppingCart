import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { DbserviceService } from '../../services/dbservice.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public isLoggedIn;
  public user$ = this.authservice.user;
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

  constructor(private authservice : AuthService, private router : Router, private ddbServiceb: DbserviceService) {
    console.log("ChecOut constructor Work");
    authservice.isAuthenticated()
                .subscribe(
                  success => this.isLoggedIn = success
                );
    
    
   }

  

  onChkboxChange(eve: any) {
    this.displayPswrdField = !this.displayPswrdField;
  }


   onSubmitBilling(formValue) {
    console.log("save Billing detail: ", formValue);
    console.log("save Billing detail: ", formValue.email);
    console.log("save Billing detail: ", formValue.password);
   
    if(formValue.createAccount){
      console.log("Save Customer profile && register -->", formValue);      
      this.signup(formValue.email, formValue.password);
      this.authservice.saveCustomerProfile(formValue);
    }
    else{
      // let savedUser = this.authservice.isAuthenticated();
      console.log("Just Save Customer profile not register -->", formValue);
      this.authservice.saveCustomerProfile(formValue);      
    }

  }

  signup(email, password){
      this.authservice.signup(email, password);
  }
  
  logOut(){
        this.authservice.logout();
        this.router.navigate(['/']);
      }

  ngOnInit() {
  }

}
