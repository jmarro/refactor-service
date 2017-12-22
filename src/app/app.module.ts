import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AvisosService } from '../services/avisos.service';
import { DetailPage } from '../pages/detail/detail';
import { SelectedService } from '../services/selected.service';
import { NameModal } from '../modals/name/name.modal';
import { UtilsService } from '../services/utils.service';
import { AddressModal } from '../modals/address/address.modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    NameModal,
    AddressModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    NameModal,
    AddressModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AvisosService,
    SelectedService,
    UtilsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
