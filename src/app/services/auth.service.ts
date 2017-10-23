import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, AngularFireList  } from 'angularfire2/database';


@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  customersRef: AngularFireList<any>;
  

  constructor(private afAuth : AngularFireAuth, db: AngularFireDatabase ) {
      this.user = afAuth.authState;
      this.customersRef = db.list('customersProfile');

   }

   login(email, password): Observable<any> {
    return Observable.fromPromise(
       this.afAuth.auth.signInWithEmailAndPassword(email, password)
    ); 
  }

  isAuthenticated() : Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  signup(email, password){
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function(user) {
          // User is created and signed in, do whatever is needed    
           
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('User did not sign up correctly');
          console.log(errorCode, errorMessage);
          // console.log();
        });
    }

    saveCustomerProfile(customer){
      console.log("Going to save customer Profile:", customer);
      this.customersRef.push({ customer });             
    }




}
