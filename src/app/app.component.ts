import { SiginPage } from './../pages/sigin/sigin';
<<<<<<< HEAD
=======
import { SignupPage } from './../pages/signup/signup';
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { HomePage } from './../pages/home/home';

import { OnboardingPage } from './../pages/onboarding/onboarding';
>>>>>>> 5760df26b3ec7779428728886e4761ac7a21873a
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
=======



>>>>>>> 5760df26b3ec7779428728886e4761ac7a21873a

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

<<<<<<< HEAD
  rootPage: any = SiginPage;
=======
  rootPage: any = OnboardingPage;
>>>>>>> 5760df26b3ec7779428728886e4761ac7a21873a

  private HomePage;
  private UserprofilePage;
  private SignupPage;
  private SiginPage;
  



  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.HomePage =HomePage;
    this.UserprofilePage= UserprofilePage;
    this.SignupPage = SignupPage;
    this.SiginPage = SiginPage;


  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
    openPage(page) {
      this.rootPage =page; 
  }
}
