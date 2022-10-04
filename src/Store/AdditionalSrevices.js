import { makeAutoObservable } from "mobx";

export default class AdditionalStore {
  constructor() {
    this._addList = [
      {
        id: 1,
        name: "Ламинация",
        desc: "Дополнительная защита изображения от повреждений",
        img: "https://i.ytimg.com/vi/oyIB4r6CCA0/hqdefault.jpg"
      },
      {
        id: 2,
        name: "Обрезка по периметру",
        desc: "Сквозная резка продукции",
        img: "http://expographica.ru/images/12_08_16/001.jpg"
      }
    ];
    makeAutoObservable(this);
  }
  setAddList(list) {
    this._addList = list;
  }
  get addList() {
    return this._addList;
  }
}
