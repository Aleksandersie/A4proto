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
