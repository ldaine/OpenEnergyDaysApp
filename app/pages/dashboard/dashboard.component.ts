import { Component } from '@angular/core';
import { NavController,ViewController, ModalController } from 'ionic-angular';
import { HousePage } from '../house/house.component';
import { ProfilePage } from '../profile/profile.component';
import { StatisticsPage } from '../statistics/statistics.component';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class DashboardPage {
  constructor(public navCtrl: NavController,
              public viewController: ViewController,
            public modalController:ModalController) {

  }

  dismiss() {
   //let data = { 'foo': 'bar' };
   //this.viewController.dismiss(data);
   this.viewController.dismiss();
 }


 presentModal(page:string) {
   if(page==="Profile"){
     let modal = this.modalController.create(ProfilePage);
     modal.present();
   } else if(page==="Statistics-me"){
     let modal = this.modalController.create(StatisticsPage, {"mode": "me"});
     modal.present();
   } else if(page==="Statistics-friends"){
     let modal = this.modalController.create(StatisticsPage, {"mode": "friends"});
     modal.present();
   } else if(page==="Statistics-others"){
     let modal = this.modalController.create(StatisticsPage, {"mode": "others"});
     modal.present();
   } else if(page==="House"){
     let modal = this.modalController.create(HousePage);
     modal.present();
   }
 }
}
