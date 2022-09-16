const { makeAutoObservable } = require("mobx");

export default class OrderStore {
  constructor() {
    this._order = [];

    makeAutoObservable(this);
  }

  setOrder(order) {
    this._order = order;
  }


  get order() {
    return this._order;
  }

}
