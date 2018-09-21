import { AccountProvider } from './../../providers/account/account';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alert,Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase/app';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  Firstname:string;
  Lastname:string;
  Email:string;          //declaration
  Password:string;
  Confirm:string;
  data=[];
  load:Loading;

  
   constructor(private navCtrl: NavController,private accountP:AccountProvider, private loadingCtrl: LoadingController,
    private alertCtrl:AlertController, private provider:AuthProvider, private toastCtrl: ToastController) {
 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  submit(){
  var account={
  Email:this.Email,      
  Password:this.Password,
  };

  var loader = this.loadingCtrl.create({
    content: "Please wait...",
    
  });
  loader.present();

this.provider.signupUser(account).then(authData=>{
  loader.dismiss();
// this.load.dismiss().then(()=>{
    // this.navCtrl.setRoot(HomePage);
  // })
 },error=>{
   loader.dismiss();

   let toast= this.toastCtrl.create({
    message: error,
    duration: 3000,
    position: 'top'

   });
   toast.present();
   this.Password = ""
 });

{
 let alert: Alert =this.alertCtrl.create({
  message:"Congratulations",
  buttons:[{
    text:'OK',
    handler:data=>{
    this.navCtrl.setRoot(HomePage)
    }

  }]
 })
 alert.present();
}
this.accountP.updateDetails(this.Firstname,this.Lastname,this.Email) 

}  //method


} //export
