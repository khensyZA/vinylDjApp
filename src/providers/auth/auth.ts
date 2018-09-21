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

  constructor() {

 
    console.log('Hello AuthProvider Provider');

  }
  //authenication using email & 
signIn(email:string,password:string):Promise<any>{
  return firebase.auth().signInWithEmailAndPassword(email,password);
}

resetPassword(email:string):Promise<any>{
  return firebase.auth().sendPasswordResetEmail(email);
}


  

     

}
