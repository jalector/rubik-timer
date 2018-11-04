import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  AlertController,
  ToastController,
} from 'ionic-angular';

import { GlobalRequestProvider } from '../../providers/global-request/global-request';
import { Session } from '../../model/Session';
import { ENV } from '@app/env';

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  time: number;
  loop: number;
  lookLoop:number;
  start:number;
  session:Session;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private grProvider: GlobalRequestProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.session = new Session();
    this.time = 0;
    this.start = 0;
    this.loop = 0;
    this.lookLoop = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
    console.log( ENV );
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

  lookTime(){
    this.start = Date.now();
    this.lookLoop = setInterval(() => {
      
      this.time = Date.now() - this.start;
      if(this.time > (5 * 1000)){
        this.exitLook();
        this.run();
      }
    }, 5);
  }

  exitLook():void{
    clearInterval( this.lookLoop );
    this.lookLoop = 0;        
  }

  takeTime() {
    if( this.loop == 0 ){
      this.time = 0;
      if( this.lookLoop == 0 ) {
        this.lookTime();
      } else {
        this.exitLook();
        this.run();
      }
    }else{
      this.stop();
      this.session.newRecord( this.time );
      this.session.updateAverage();
    }
  }


  confirmSaveSession(){
    if( this.session.avg3 != 0 ) {
      this.alertCtrl.create({
        message: 'Todos los registros que tengas se guardarán en tu h istorial. ¿Estás seguro?',
        buttons: [{
          text: 'Agree',
          handler: () => { this.saveSession(); }
        },{
          text: 'Abort',
          role:'cancel'
        }]
      }).present();
    } else {
      this.toastCtrl.create({
        message: 'Realiza por lo menos tres registros para guardar',
        duration: 2000,
        position: 'top'
      })
    }
  }
  saveSession(){    
    this.grProvider.saveSession( this.session );
    this.session = new Session();

  }  
  
}
