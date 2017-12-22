import { Component } from '@angular/core';
import { ViewController, NavParams } from "ionic-angular";
import { SelectedService } from '../../services/selected.service';


const MODALNAME = 'nombreModal';

@Component({
  selector: 'name-modal',
  templateUrl: 'name.modal.html'
})

export class NameModal {

  public first: boolean = false;
  constructor(public viewCtrl: ViewController,
    public selectedService: SelectedService
  ) {
    if (!this.selectedService.keys[MODALNAME]) {
      this.first = true;
      this.selectedService.keys[MODALNAME] = { 'name': this.selectedService.live.name, 'surname': this.selectedService.live.surname };
    }
  }

  /**
   * Dismisses the modal
   */
  public dismiss(): void {
    console.log(this.selectedService.keys);
    this.selectedService.live.name = this.selectedService.keys[MODALNAME].name;
    this.selectedService.live.surname = this.selectedService.keys[MODALNAME].surname;
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
      'name': this.selectedService.live.name,
      'surname': this.selectedService.live.surname
    }
    if (this.selectedService.changeServer) {
      this.selectedService.updateLive();
    }
    this.viewCtrl.dismiss();
  }



}
