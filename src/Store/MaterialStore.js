const { makeAutoObservable } = require("mobx");

export default class MaterialStore {
  constructor() {
    this._list = [
      {
        id: 1,
        name: "Плёнка"
      },
      {
        id: 2,
        name: "Баннер"
      },
      {
        id: 3,
        name: "Бумага"
      },
      {
        id: 4,
        name: "Беклит"
      }
    ];
    this._selectedMaterial = {};
    makeAutoObservable(this);
  }

  setList(material) {
    this._list = material;
  }
  setSelectedMaterial(material) {
    this._selectedMaterial = material;
  }

  get list() {
    return this._list;
  }
  get selectedMaterial() {
    return this._selectedMaterial;
  }
}
