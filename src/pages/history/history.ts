import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Session } from '../../model/Session';
import { GlobalRequestProvider } from '../../providers/global-request/global-request';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  public sessions:Session[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private grProvider: GlobalRequestProvider
  ) {   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.sessions = this.grProvider.loadSessions();
    console.log("Probando, ", this.sessions);
  }

}
