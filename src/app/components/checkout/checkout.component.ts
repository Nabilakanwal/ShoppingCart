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
  itemsFromStorage;
  totalAmount = null;

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

  constructor(private authservice : AuthService, private router : Router, private dbService: DbserviceService) {
    console.log("ChecOut constructor Work");
    let self = this;
    authservice.isAuthenticated()
                .subscribe(
                  success => this.isLoggedIn = success
                );
    
    //get shoping detail from localstorage
    self.itemsFromStorage = JSON.parse(localStorage.getItem("itemsArr"));
    console.log("this.itemsFromStorage",self.itemsFromStorage);
    if(self.itemsFromStorage){
            self.itemsFromStorage.forEach(function (value) {
            self.totalAmount += value.product.pPrice          
        });
        console.log("totalAmount", self.totalAmount);
    }

   }

  

  onChkboxChange(eve: any) {
    this.displayPswrdField = !this.displayPswrdField;
  }


   onSubmitBilling(formValue) {
    console.log("save Customer profile  && Billing detail: ", formValue, formValue.email, formValue.password);
    this.authservice.saveCustomerProfile(formValue); 
    this.dbService.saveCartItems(this.itemsFromStorage);               
       
    if(formValue.createAccount){
      console.log("register Customer -->", formValue);      
      this.signup(formValue.email, formValue.password);
    }
    
    alert("Your Order has been confirmed. \n Order will be delivered to your door step please pay cash on delivery");
    this.router.navigate(['/home']);
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
