import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GooglePlus} from '@ionic-native/google-plus';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import * as firebase from 'firebase'
import { SiginPage } from '../pages/sigin/sigin';

export const  config = {

  apiKey: "AIzaSyDprSLfvZ6XwAH4HmGZiqogiC1VRzoJsNQ",
  authDomain: "djapp-b7c62.firebaseapp.com",
  databaseURL: "https://djapp-b7c62.firebaseio.com",
  projectId: "djapp-b7c62",
  storageBucket: "djapp-b7c62.appspot.com",
  messagingSenderId: "908551573279"
};

firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SiginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SiginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider, GooglePlus
    
  ]
})
export class AppModule {}
