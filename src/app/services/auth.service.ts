import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, AngularFireList  } from 'angularfire2/database';


@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  usersRef: AngularFireList<any>;

  constructor(private afAuth : AngularFireAuth ) {
      this.user = afAuth.authState;
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
      let data = {
        email: email,
        password: password
      }

         this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function(user) {
          // User is created and signed in, do whatever is needed           
           this.usersRef.push({ user: data });
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('User did not sign up correctly');
          console.log(errorCode, errorMessage);
          // console.log();
        });
    }



}
