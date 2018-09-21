<<<<<<< HEAD
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { SiginPage } from './../pages/sigin/sigin';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
=======
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';

=======
>>>>>>> 8b9a92a4f3f29f2b5e723b2c064d36e4abed24dd
import { ViewDetailsPage } from './../pages/view-details/view-details';
>>>>>>> e5a83e6c81e12c1a9e878e707ec76e5d7a0e3c33
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { AccountProvider } from '../providers/account/account';

export const config = {
  apiKey: "AIzaSyBKVCYYBLvT7nWLgjkINb4nWrEN4MSQd_4",
  authDomain: "vinyl-dj-app.firebaseapp.com",
  databaseURL: "https://vinyl-dj-app.firebaseio.com",
  projectId: "vinyl-dj-app",
  storageBucket: "vinyl-dj-app.appspot.com",
  messagingSenderId: "289547200801"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
<<<<<<< HEAD
    ViewDetailsPage,
    SignupPage,
    SiginPage,
    UserprofilePage

=======
<<<<<<< HEAD
    SignupPage
=======
    ViewDetailsPage
>>>>>>> e5a83e6c81e12c1a9e878e707ec76e5d7a0e3c33
>>>>>>> 8b9a92a4f3f29f2b5e723b2c064d36e4abed24dd
  ],
  imports: [

  BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
<<<<<<< HEAD
    ViewDetailsPage,
    SignupPage,
    SiginPage,
    UserprofilePage
=======
<<<<<<< HEAD
    SignupPage
=======
    ViewDetailsPage
>>>>>>> e5a83e6c81e12c1a9e878e707ec76e5d7a0e3c33
>>>>>>> 8b9a92a4f3f29f2b5e723b2c064d36e4abed24dd
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireModule,
    AccountProvider,

  ]
})
export class AppModule {}
