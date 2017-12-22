export class Address {

  private _street: string;
  private _number: number;
  private _floor: number;
  private _door: string;
  private _cp: number;

  constructor(street: string, number: number, floor: number, cp: number, door: string) {
    this.street = street;
    this.number = number;
    this.floor = floor;
    this.cp = cp;
    this.door = door;
  }

  public get street(): string {
    return this._street;
  }

  public set street(value: string) {
    this._street = value;
  }

  public get number(): number {
    return this._number;
  }

  public set number(value: number) {
    this._number = value;
  }

  public get floor(): number {
    return this._floor;
  }

  public set floor(value: number) {
    this._floor = value;
  }

  public get cp(): number {
    return this._cp;
  }

  public set cp(value: number) {
    this._cp = value;
  }

  public get door(): string {
    return this._door;
  }

  public set door(value: string) {
    this._door = value;
  }
}
