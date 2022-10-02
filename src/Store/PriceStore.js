const { makeAutoObservable } = require("mobx");

export default class PriceStore {
  constructor() {
    this._priceList = { vinyl: 1000, banner: 800 };
    makeAutoObservable(this);
  }
  setPriceList(price) {
    this._priceList = price;
  }
  get priceList() {
    return this._priceList;
  }
}
