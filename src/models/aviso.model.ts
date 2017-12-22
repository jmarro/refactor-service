import { Address } from "./address.model";

export class Aviso {


  private _id: number;
  private _name: string;
  private _surname: string;
  private _city: string;
  private _age: number;
  private _color: string;
  private _job: string;
  private _address: Address;

  constructor(id: number, name: string, surname: string, city: string, age: number, color: string, job: string, address: Address) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.age = age;
    this.color = color;
    this.job = job;
    this.address = address;
  }
  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get surname(): string {
    return this._surname;
  }

  public set surname(value: string) {
    this._surname = value;
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get job(): string {
    return this._job;
  }

  public set job(value: string) {
    this._job = value;
  }

  public get address(): Address {
    return this._address;
  }

  public set address(value: Address) {
    this._address = value;
  }
}
