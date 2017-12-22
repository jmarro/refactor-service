import { Component } from '@angular/core';
import { ViewController, NavParams } from "ionic-angular";
import { SelectedService } from '../../services/selected.service';
import { UtilsService } from '../../services/utils.service';


const MODALNAME = 'addressModal';

@Component({
  selector: 'address-modal',
  templateUrl: 'address.modal.html'
})

export class AddressModal {

  public first: boolean = false;
  constructor(public viewCtrl: ViewController,
    public selectedService: SelectedService,
    public utilsService: UtilsService
  ) {
    if (!this.selectedService.keys[MODALNAME]) {
      this.first = true;
      this.selectedService.keys[MODALNAME] = { 'address': this.utilsService.clone(this.selectedService.live.address, true) };
    }
  }

  /**
   * Dismisses the modal
   */
  public dismiss(): void {
    console.log(this.selectedService.keys);
    this.selectedService.live.address = this.selectedService.keys[MODALNAME].address;
    if (this.first) {
      delete this.selectedService.keys[MODALNAME];
    }

    if (this.selectedService.changeServer) {
      this.selectedService.updateLive();
    }
    this.viewCtrl.dismiss();
  }

  public accept(): void {
    this.selectedService.keys[MODALNAME] = {
      'address': this.utilsService.clone(this.selectedService.live.address, true)
    }
    if (this.selectedService.changeServer) {
      this.selectedService.updateLive();
    }
    this.viewCtrl.dismiss();
  }



}
