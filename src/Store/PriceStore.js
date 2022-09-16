const { makeAutoObservable } = require("mobx");

export default class PriceStore {
  constructor() {
    this._price = [{ vinyl: 1000, banner: 800 }];
    makeAutoObservable(this);
  }
  setPrice(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
}
