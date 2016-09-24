import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home.component';
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
    this.tabHomeRoot = HomePage;
    this.tabProfileRoot = ProfilePage;
    this.tabStatisticsRoot = StatisticsPage;
  }


  presentModal() {
    let modal = this.modalController.create(ProfilePage);
    modal.present();
  }
}
