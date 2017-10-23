import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { DbserviceService } from '../../services/dbservice.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isResetPaswrd : boolean = false;

  constructor(private authservice : AuthService, private router : Router, private ddbServiceb: DbserviceService) { 

  }

  onSubmit(loginFormValue){
      //  Login Section
      console.log("login user clicked", loginFormValue);
    this.authservice.login(loginFormValue.email, loginFormValue.password)
         .subscribe(
            //  success => this.router.navigate(['/addproduct']),
             success => alert(JSON.stringify(success)),            
             error => alert( JSON.stringify(error))
         );
  }

  showResetContainer(){
    this.isResetPaswrd = true;
  }

  ngOnInit() {
  }

}
