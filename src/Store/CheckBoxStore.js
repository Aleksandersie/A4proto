import { makeAutoObservable } from "mobx";

export default class CheckBoxStore {
  constructor() {
    this._lamination = false;
    this._glossy = false;
    this._matt = true;
    this._transparent = false;
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
}
