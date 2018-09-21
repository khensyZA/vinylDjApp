import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
   userProfile:firebase.database.Reference;
  data: any;
  fireAuth: any;
  
  
  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');

    console.log('Hello AuthProvider Provider');
  }


  

   signupUser(account:{}){

    
     return this.fireAuth.createUserWithEmailAndPassword(account['Email'], account['Password']).then((newUser) => {
       //sign in the user
        this.fireAuth.signInWithEmailAndPassword(account['Email'], account['Password']).then((authenticatedUser) => {
         //successful login, create user profile
       this.userProfile.child( authenticatedUser.uid).set(
         account
       );
       });
      });

}

     

}
