import { makeAutoObservable } from "mobx";

export default class CheckBoxSrore {
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
  setGlossy(glossy) {
    this._glossy = glossy;
  }
  get glossy() {
    return this._glossy;
  }
}
