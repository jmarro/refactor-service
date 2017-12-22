import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { AvisosService } from '../services/avisos.service';
import { SelectedService } from '../services/selected.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, http: Http, avisosService: AvisosService, selectedService: SelectedService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      http.get('./assets/data/a.json').subscribe((res: any) => {
        avisosService.avisos = res.json().avisos;
        console.log(avisosService.avisos);
      }, error => {
        console.error(error);
      })

      setTimeout(() => {
        http.get('./assets/data/b.json').subscribe((res: any) => {
          avisosService.avisos = res.json().avisos;
          if(selectedService.live && selectedService.live.id){
            console.log('there is one selected');
            let avisoModified = avisosService.avisos.find(item => item.id === selectedService.live.id);
            selectedService.updateFromServer(avisoModified);
          }
          console.log(avisosService.avisos);
        }, error => {
          console.error(error);
        })
      }, 10000);


    });
  }
}

