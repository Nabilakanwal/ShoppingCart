import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireAction, AngularFireList  } from 'angularfire2/database'; 
import {  FirebaseListObservable } from 'angularfire2/database-deprecated';  //FirebaseListObservable
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



@Injectable()
export class DbserviceService {

      user: Observable<firebase.User>;
      productRef: AngularFireList<any>;
      products: Observable<any[]>;
      cartRef: AngularFireList<any>;
      cartItems: Observable<any[]>;
      feedBackRef: AngularFireList<any>;
      

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) { 
        this.user = this.afAuth.authState;   // only triggered on sign-in/out (for old behavior use .idToken)
        this.productRef = db.list('products');
        this.cartRef = db.list('cartItems');
        this.feedBackRef = db.list('customerFeedBack');
        
        // this.getProductsList();
  }

  saveProduct(data) {
        console.log("Going to save in DB");
         this.productRef.push({ product: data });
         }

  getProductsList(cb){
        console.log("get product list from DB service");
       this.products = this.productRef.snapshotChanges()

       this.productRef.snapshotChanges()
        .subscribe(actions => {
          let productArr: any = [];
          actions.forEach(action => {
            let productData:any = {};
            productData = action.payload.val();
            productData.key = action.key;
            productArr.push(productData);
            // console.log(action.type);
            // console.log(action.key);
            // console.log(action.payload.val());
          });
          cb(productArr);
          
      });
      //  return  this.productArr;
  }


   saveCartItems(data) {
        console.log("Going to save in DB");
         this.cartRef.push({ ShopItems: data });
      }

  getItemList(cb){
        console.log("get Item list from DB service");
       this.cartItems = this.cartRef.snapshotChanges()

       this.cartRef.snapshotChanges()
        .subscribe(actions => {
          let itemArr: any = [];
          actions.forEach(action => {
            let itemData:any = {};
            itemData = action.payload.val();
            itemData.key = action.key;
            itemArr.push(itemData);
            // console.log(action.type);
            // console.log(action.key);
            // console.log(action.payload.val());
          });
          cb(itemArr);
          
      });
      //  return  this.productArr;
  }

  saveFeedBack(custFeedBack) {
        console.log("Going to save saveFeedBack in DB");
         this.feedBackRef.push({ custFeedBack });
         }


   login() {
            this.afAuth.auth.signInAnonymously();
    }

    logout() {
            this.afAuth.auth.signOut();
    }


}
