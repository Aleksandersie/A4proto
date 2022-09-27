import { INT_PRINT_CALC } from "../routeConst/routeConst";

import { makeAutoObservable } from "mobx";

export default class MaterialStore {
  constructor() {
    this._list = [
      {
        id: 1,
        name: "Плёнка",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
      },
      {
        id: 2,
        name: "Баннер",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
      },
      {
        id: 3,
        name: "Бумага",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
      },
      {
        id: 4,
        name: "Беклит",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
      },
    ];
    this._vinyl = [
      { name: "Белая глянцевая пленка", brand: "OraJet 3640G", id: 1 },
      { name: "Белая матовая пленка", brand: "OraJet 3640M", id: 2 },
      {
        name: "Прозрачная глянцевая пленка",
        brand: "OraJet 3640 Clear G",
        id: 3,
      },
      { name: "Белая матовая пленка", brand: "OraJet 3640 Clear M", id: 4 },
    ];
    this._selectedMaterial = {};
    this._selectedVinyl = {};
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
  setVinyl(vinyl) {
    this._vinyl = vinyl;
  }
  get vinyl() {
    return this._vinyl;
  }
  setSelectedVinyl(vinyl) {
    this._selectedVinyl = vinyl;
  }
  get selectedVinyl() {
    return this._selectedVinyl;
  }
}
