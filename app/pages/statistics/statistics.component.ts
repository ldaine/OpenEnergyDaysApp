import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/statistics/statistics.html'
})
export class StatisticsPage {

  mode_me:boolean =false;
  mode_friends:boolean =false;
  mode_others:boolean =false;

  constructor(public navCtrl: NavController,
              private viewController:ViewController,
            private _navParams: NavParams) {
                console.log(this._navParams.get("mode"));
              if(this._navParams.get("mode")=== "me"){
                this.mode_me = true;
              } else if(this._navParams.get("mode")=== "friends"){
                this.mode_friends = true;
              } else if(this._navParams.get("mode")=== "others"){
                this.mode_others = true;
              } else if(this._navParams.get("mode")=== "all"){
                this.mode_me = true;
                this.mode_friends = true;
                this.mode_others = true;
              }

  }



  dismiss() {
   //let data = { 'foo': 'bar' };
   //this.viewController.dismiss(data);
   this.viewController.dismiss();
 }
}
