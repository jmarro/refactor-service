import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { DetailPage } from '../detail/detail';
import { SelectedService } from '../../services/selected.service';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public avisos;
  constructor(public navCtrl: NavController, public avisosService: AvisosService, public selectedService: SelectedService, public utilsService: UtilsService) {

  }

  public ionViewDidEnter(){
    this.selectedService.live = null;
    this.selectedService.keys = new Object();
  }

  public selectAviso(aviso) {
    this.selectedService.live = this.utilsService.clone(aviso, true);
    this.selectedService.keys = new Object();
    this.navCtrl.push(DetailPage)
  }
}
