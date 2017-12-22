import { Injectable } from '@angular/core';
import { Aviso } from '../models/aviso.model';
import { UtilsService } from './utils.service';


@Injectable()
export class SelectedService {


  private _live: Aviso;
  public changeServer: boolean;
  public fromserverObject: Aviso;
  private _keys: Object;

  constructor(public utilsService: UtilsService) { }


  public get live(): Aviso {
    return this._live;
  }

  public set live(value: Aviso) {
    this._live = value;
  }

  public get keys(): Object {
    return this._keys;
  }

  public set keys(value: Object) {
    this._keys = value;
  }

  public updateLive(){
    let temp = this.utilsService.clone(this.fromserverObject, true);
    for (let item in this.keys) {
      for (let property in this.keys[item]) {
        temp[property] = this.keys[item][property];
      }
    }

    console.log('temp', temp)
    this.live = temp;
    this.changeServer = false;
  }

  public updateFromServer(serverAviso: Aviso) {
    this.fromserverObject = this.utilsService.clone(serverAviso, true);
    this.changeServer = true;
    // !modales && rootDetalle => this.updateLive()

  }

}
