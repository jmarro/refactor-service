import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SelectedService } from '../../services/selected.service';
import { NameModal } from '../../modals/name/name.modal';
import { AddressModal } from '../../modals/address/address.modal';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController, public selectedService: SelectedService, public modalCtrl: ModalController) {

  }

  public name (){
     let modal = this.modalCtrl.create(NameModal)
     modal.present();
     modal.onDidDismiss(()=>{
       console.log('keys',this.selectedService.keys);
       console.log('live',this.selectedService.live);
     });
  }
  public address (){
     let modal = this.modalCtrl.create(AddressModal)
     modal.present();
     modal.onDidDismiss(()=>{
       console.log('keys',this.selectedService.keys);
       console.log('live',this.selectedService.live);
     });
  }




}
