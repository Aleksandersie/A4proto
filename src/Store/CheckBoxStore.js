import { makeAutoObservable } from "mobx";

export default class CheckBoxStore {
  constructor() {
    this._lamination = false;
    this._glossy = false;
    this._matt = false;
    this._transparent = false;
    this._white = false;
    makeAutoObservable(this);
  }
  setLamination(bool) {
    this._lamination = bool;
  }
  get lamination() {
    return this._lamination;
  }
  setGlossy(bool) {
    this._glossy = bool;
  }
  get glossy() {
    return this._glossy;
  }
  setMatt(bool) {
    this._matt = bool;
  }
  get matt() {
    return this._matt;
  }
  setWhite(bool) {
    this._white = bool;
  }
  get white() {
    return this._white;
  }
  setTransparent(bool) {
    this._transparent = bool;
  }
  get transparent() {
    return this._transparent;
  }
}
