import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatSliderModule, MatListModule, MatIconModule,  MatButtonModule, MatGridListModule, MatTabsModule, MatFormFieldModule} from '@angular/material';
import {Router} from "@angular/router";

import { AngularFireModule } from 'angularfire2';
import {  FirebaseListObservable } from 'angularfire2/database-deprecated';  //FirebaseListObservable
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DbserviceService } from '../../services/dbservice.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
 
  itemsFromStorage;
  totalAmount = null;

  constructor(private dbService : DbserviceService, private af : AngularFireModule, public router: Router) { 
    let self = this;
     console.log("View Constructor");
      self.itemsFromStorage = JSON.parse(localStorage.getItem("itemsArr"));
      console.log("this.itemsFromStorage",self.itemsFromStorage);
      //total calculation

        if(self.itemsFromStorage){
            self.itemsFromStorage.forEach(function (value) {
            self.totalAmount += value.product.pPrice          
        });
        console.log("totalAmount", self.totalAmount);
      }
      
  }


    removeItem(item){
      let self = this;
      console.log("on remove click--->", item);
      let itemArr = this.itemsFromStorage;
      console.log("itemArr", itemArr);
      for(let i = 0; i<itemArr.length; i++){
            console.log("value.key", item);
            console.log("item[i].key", item.key);
                if(item.key == itemArr[i].key){
                  itemArr.splice(i, 1);
            }
          }
            
    console.log("After remove click--->", itemArr);
    self.itemsFromStorage = localStorage.setItem("itemsArr", JSON.stringify(itemArr));
    if(self.itemsFromStorage){
            self.itemsFromStorage.forEach(function (value) {
            self.totalAmount += value.product.pPrice          
        });
        console.log("totalAmount", self.totalAmount);
      }
    }


        
  ngOnInit() {
  }

}
