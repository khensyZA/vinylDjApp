import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { ResetPage } from './../reset/reset';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import {Alert,AlertController,Loading,LoadingController, IonicPage, NavController } from 'ionic-angular';
import 'firebase/database';
import firebase from 'firebase/app';
<<<<<<< HEAD
=======
import 'firebase/auth';
>>>>>>> 55d662ead93519ce80e632eacebcc1801eecf968


/**
 * Generated class for the SiginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sigin',
  templateUrl: 'sigin.html',
})
export class SiginPage {
  private load:Loading;

  email:string;
  password:string;

    constructor(public navCtrl: NavController,
       private alertCtrl:AlertController,
       private loadingCTR: LoadingController, 
       private authProvider:AuthProvider ) {
    }
  
ionViewDidLoad() {
  console.log('ionViewDidLoad  SiginPage');
}
goToSignUp():void {
  this.navCtrl.push( SignupPage);
} 
Google(){

  let loader = this.loadingCTR.create({
    content: 'Please wait'
  })

}
signIn(){
  if(!this.email && !this.password){
  console.log('Enter email and address')
  }else{
    this.authProvider.signIn(this.email, this.password)
    .then(authData=>{
      this.load.dismiss().then(()=>{
    this.navCtrl.setRoot('HomePage');
      })
    },error=>{
      this.load.dismiss().then(()=>{
        const alert :Alert = this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role: 'cancel'}]
        })
        alert.present();
      })
    })
    this.load=this.loadingCTR.create();
    this.load.present()
    }
  }
  ForgotPassword(){
      this.navCtrl.setRoot('ResetPage');
    
  } 
  
  goback(){
    this.navCtrl.setRoot(HomePage);
   }
}
