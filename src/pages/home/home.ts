import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewDetailsPage } from './../view-details/view-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   goToDetails(){
    this.navCtrl.push(ViewDetailsPage);
  }


}
