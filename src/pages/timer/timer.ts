import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  time: number;
  loop: number;
  start:number;
  records:number[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.time = 0;
    this.start = 0;
    this.loop = 0;
    this.records = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

  run ( ) {
    this.start = Date.now();
    this.loop = setInterval(() => {
      this.time = Date.now() - this.start;
    }, 5);
  }

  stop ( ) {
    clearInterval( this.loop );
    this.loop = 0;
  }

  takeTime() {
    if( this.loop == 0 ){
      this.time = 0;
      this.run();
    }else{
      this.stop();
      this.records.push( this.time );      
    }
  }
}
