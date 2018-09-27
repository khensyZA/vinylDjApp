import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewDetailsPage } from './../view-details/view-details';
import { AuthProvider } from '../../providers/auth/auth';
import { OnboardingPage } from '../onboarding/onboarding';



@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public isSearchbarOpened=false;

  topics=[];

  constructor(public navCtrl: NavController,private auth:AuthProvider) {
     this.generateTopics();
  }
  generateTopics(){
    this.topics=["Dj clock","DJ balck Coffee","Dj ganyani"];
  }

  getTopics(ev:any){
     this.generateTopics();
     let serVal=ev.target.value;
      if(serVal && serVal.trim() !=''){
         this.topics=this.topics.filter((topic)=>{
           return (topic.toLowerCase().indexOf(serVal.toLowerCase))>-1
         });
      }
  }
   goToDetails(){
    this.navCtrl.push(ViewDetailsPage);
  }


  onSearch(event){
    
  }
}
