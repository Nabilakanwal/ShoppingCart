import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {  FirebaseListObservable } from 'angularfire2/database-deprecated';  //FirebaseListObservable

import { Router } from '@angular/router';
import { LeftnavshopComponent } from '../leftnavshop/leftnavshop.component';
import { DbserviceService } from '../../services/dbservice.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
   displayProductsArr;
   itemsArr;
   viewCartBtn;
   shopProduct$ : FirebaseListObservable<any>[] = [];
   viewbtn = {};

  constructor(private dbService : DbserviceService, private af : AngularFireModule, public router : Router ) {
       let self = this;
      self.dbService.getProductsList((productsArr)=>{
        self.displayProductsArr = productsArr;
      });
     
      let chkStorage = JSON.parse(localStorage.getItem("itemsArr"));
      if(chkStorage){
          chkStorage.forEach(function (value) {
            self.viewbtn[value.key] = true;
            // console.log("this.viewbtn[value.key]", this.viewbtn[value.key]);
            console.log("value.key", value.key);
            
        });

      }   
   }

   addProductinCart(item){
    //  debugger
     console.log("Adding product in cart:", item ); 
      this.shopProduct$.push(item);
      console.log("this.shopProduct$", this.shopProduct$);
      localStorage.setItem("itemsArr", JSON.stringify(this.shopProduct$));
      
        this.viewbtn[item.key] = true; 
            console.log("this.viewbtn[item.key]", this.viewbtn[item.key]);
            console.log("item.key", item.key);
          
   }

  ngOnInit() {
  }

}
