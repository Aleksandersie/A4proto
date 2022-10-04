import { makeAutoObservable } from "mobx";

export default class AdditionalStore {
  constructor() {
    this._addList = [
      {
        id: 1,
        name: "Ламинация",
        desc: "Дополнительная защита изображения от повреждений"
      },
      {
        id: 2,
        name: "Обрезка по периметру",
        desc: "Сквозная резка продукции"
      }
    ];
  }
}
