import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard.component';
import { HousePage } from '../house/house.component';
import { ProfilePage } from '../profile/profile.component';
import { StatisticsPage } from '../statistics/statistics.component';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tabHomeRoot: any;
  public tabProfileRoot: any;
  public tabStatisticsRoot: any;

  constructor(private modalController: ModalController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tabHomeRoot = DashboardPage;
    this.tabProfileRoot = ProfilePage;
    this.tabStatisticsRoot = StatisticsPage;
  }


  presentModal(page:string) {
    if(page==="Profile"){
      let modal = this.modalController.create(ProfilePage);
      modal.present();
    } else if(page==="Statistics"){
      let modal = this.modalController.create(StatisticsPage);
      modal.present();
    } else if(page==="Home"){
      let modal = this.modalController.create(HousePage);
      modal.present();
    }


  }
}
