import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/statistics/statistics.html'
})
export class StatisticsPage {
  constructor(public navCtrl: NavController,
              private viewController:ViewController) {
  }

  dismiss() {
   //let data = { 'foo': 'bar' };
   //this.viewController.dismiss(data);
   this.viewController.dismiss();
 }
}
