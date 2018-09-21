<<<<<<< HEAD
import { SiginPage } from './../pages/sigin/sigin';
import { SignupPage } from './../pages/signup/signup';
import { UserprofilePage } from './../pages/userprofile/userprofile';
=======
import { HomePage } from './../pages/home/home';
import { SignupPage } from './../pages/signup/signup';
>>>>>>> 8b9a92a4f3f29f2b5e723b2c064d36e4abed24dd
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from './../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

<<<<<<< HEAD
  private UserprofilePage;
  private SignupPage;
  private SiginPage;


=======
<<<<<<< HEAD
  rootPage: any =HomePage;
=======
>>>>>>> 8b9a92a4f3f29f2b5e723b2c064d36e4abed24dd
  rootPage: any = HomePage;
>>>>>>> e5a83e6c81e12c1a9e878e707ec76e5d7a0e3c33


  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


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
