import { UserprofilePage } from './../pages/userprofile/userprofile';
import { SiginPage } from './../pages/sigin/sigin';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { AccountProvider } from '../providers/account/account';
import { ViewDetailsPage } from '../pages/view-details/view-details';



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
    SignupPage,
    SiginPage,
    UserprofilePage,
   ViewDetailsPage

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
    ViewDetailsPage,
    SignupPage,
    SiginPage,
    UserprofilePage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AccountProvider,

  ]
})
export class AppModule {}
