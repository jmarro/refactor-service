import { Injectable } from '@angular/core';
import { Aviso } from '../models/aviso.model';


@Injectable()
export class AvisosService {

  private _avisos: Array<Aviso>;
  private _aviso: Aviso;

  constructor() { }



  public get avisos(): Array<Aviso> {
    return this._avisos;
  }

  public set avisos(value: Array<Aviso>) {
    this._avisos = value;
  }

  public get aviso(): Aviso {
    return this._aviso;
  }

  public set aviso(value: Aviso) {
    this._aviso = value;
  }

}
