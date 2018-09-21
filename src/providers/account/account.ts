import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {


  userProfile:firebase.database.Reference;
  
    constructor() {
    this.userProfile= firebase.database().ref(`userProfile`)
  }
   
  
  // getUserProfile():firebase.database.Reference{
  //   return this.userProfile;
  //   }
  
  
  updateDetails(Firstname:string, Lastname:string,Email:string ):Promise<any>{
      return this.userProfile.update({Firstname, Lastname,Email})
    }
  
  
  //   updateDOB(birthdate:string):Promise<any>{
  // return this.userProfile.update({birthdate})
  //   }
  
    // updatePassword(newPassword:string,oldPassword):Promise<any>{
  
    //   const credentials: firebase.auth.AuthCredential= firebase.auth.EmailAuthProvider.
  
    //   credential(this.currentUser.email, oldPassword);
  
    //   return this.currentUser.reauthenticateAndRetrieveDataWithCredential(credentials)
    //   .then(user=>{
    //     this.currentUser.updatePassword(newPassword).then(user=>{
    //       console.log('password has been changed')
    //     })
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //   })
    
    // }

}
