import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { ResetPage } from './../reset/reset';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import {Alert,AlertController,Loading,LoadingController, IonicPage, NavController } from 'ionic-angular';
 
   import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
   import 'firebase/database';
   import firebase from 'firebase/app';
   import 'firebase/auth';
import { GooglePlus} from '@ionic-native/google-plus'

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
       private googlePlus:GooglePlus,
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
this.googlePlus.login({
  'webClientId':'908551573279-684ilec02l8bq4o57eqmujprhpubb6nj.apps.googleusercontent.com',
  'offline':true
}).then(res=>{
  firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
    loader.dismiss();
    alert("Login success");
    this.navCtrl.setRoot('HomePage');
  }).catch(ns=>{
    loader.dismiss();
    alert("Not success")
  })
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
