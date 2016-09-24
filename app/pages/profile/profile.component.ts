import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/profile/profile.html'
})
export class ProfilePage {
  constructor(public navCtrl: NavController,
              public viewController: ViewController) {
  }

  dismiss() {
   //let data = { 'foo': 'bar' };
   //this.viewController.dismiss(data);
   this.viewController.dismiss();
 }
}
