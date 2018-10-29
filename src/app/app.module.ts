import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimerPage } from '../pages/timer/timer';
import { HistoryPage } from '../pages/history/history';




import { FromMillisPipe } from '../pipes/from-millis/from-millis';
import { GlobalRequestProvider } from '../providers/global-request/global-request';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimerPage,
    HistoryPage,
    FromMillisPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimerPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalRequestProvider
  ]
})
export class AppModule {}
