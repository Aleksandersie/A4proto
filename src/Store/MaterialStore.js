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
      {
        name: "Белая глянцевая пленка",
        brand: "OraJet 3640G",
        id: 1,
        description: "Имеет глянцевую поверхность и блеск",
        imgLink:
          "https://a.allegroimg.com/s720/11e1c1/5bbee43445ef9e097d766a0903c1/ORACAL-Folia-Klejowa-Meblowa-BIALA-POLYSK-1mx50cm-Marka-DecoMeister",
      },
      {
        name: "Белая матовая пленка",
        brand: "OraJet 3640M",
        id: 2,
        description: "Имеет матовую поверхность и блеск отсутствует",
        imgLink:
          "https://www.remex.ru/images/stories/virtuemart/product/50_v_orajet-3640.jpg",
      },
      {
        name: "Прозрачная глянцевая пленка",
        brand: "OraJet 3640 Clear G",
        id: 3,
        description: "Прозрачная пленка, имеет блеск",
        imgLink:
          "https://www.virage24.ru/upload/iblock/cfc/cfcd2106106c5a2a3562df68b6c3b7d0.jpeg",
      },
      {
        name: "Прозрачная матовая пленка",
        brand: "OraJet 3640 Clear M",
        id: 4,
        description: "Прозрачная пленка, блеск отсутствует",
        imgLink:
          "https://fokus-groupp.ru/wp-content/uploads/2022/05/plenka-prozrachnaja-300x225.jpg",
      },
    ];
    this._specVinyl = [
      {
        name: "Перфорированая пленка",
        brand: "OraJet 3640G",
        id: 1,
        description: "Имеет глянцевую поверхность и блеск",
        imgLink:
          "https://redline32.ru/assets/cache_image/images/Products/print_materials/perforated-film_1920x0_6c4.jpg",
      },
      {
        name: "С черным клевым слоем",
        brand: "OraJet 3640M",
        id: 2,
        description: "Имеет матовую поверхность и блеск отсутствует",
      },
      {
        name: "Полимерная пленка",
        brand: "OraJet 3640 Clear G",
        id: 3,
        description: "Прозрачная пленка, имеет блеск",
      },
      {
        name: "Цветная пленка",
        brand: "OraJet 3640 Clear M",
        id: 4,
        description: "Прозрачная пленка, блеск отсутствует",
      },
    ];
    this._intPrintMaterial = [
      {
        id: 1,
        name: "Плёнка",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/IMG_7250-1-scaled.jpg",
      },
      {
        id: 2,
        name: "Баннер",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/banner2.jpeg",
      },
      {
        id: 3,
        name: "Бумага",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/foto_format1-150x150.jpg",
      },
      {
        id: 4,
        name: "Беклит",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/backlit3-e1603784572542.jpg",
      },
    ];
    this._intPrintPhotoPaper = [
      {
        name: "Матовая фотобумага",
        brand: "Конфлекс",
        id: 7,
        description: "Матовая бумага для фотопечати",
        imgLink:
          "https://a4-yug.ru/wp-content/uploads/2020/10/posternaya_bumaga2.jpeg",
      },
      {
        name: "Глянцевая фотобумага",
        brand: "Конфлекс",
        id: 8,
        description: "Глянцевая бумага для фотопечати",
        imgLink:
          "https://a4-yug.ru/wp-content/uploads/2020/10/posternaya_bumaga1-e1603802660987.jpg",
      },
    ];
    this._intPrintBanner = [
      {
        name: "Баннер 440 гр",
        brand: "Конфлекс",
        id: 9,
        description: "Стандартный баннер для печати",
        imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/banner3.jpg",
      },
      {
        name: "Литой баннер",
        brand: "Конфлекс",
        id: 10,
        description: "Баннер с гладкой поверхностью",
        imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/banner1.jpg",
      },
    ];
    this._selectedMaterial = {};
    this._selectedVinyl = {};
    this._selectedSpecVinyl = {};
    this._selectedMaterialType = [];
    this._selectedIntPrintMaterial = {}; // подсветка кнопки и заголовок селектора
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
  setSelectedSpecVinyl(vinyl) {
    this._selectedSpecVinyl = vinyl;
  }
  get selectedSpecVinyl() {
    return this._selectedSpecVinyl;
  }
  setIntPrintMaterial(material) {
    this._intPrintMaterial = material;
  }
  get intPrintMaterial() {
    return this._intPrintMaterial;
  }
  setSelectedIntPrintMaterial(material) {
    this._selectedIntPrintMaterial = material;
  }
  get selectedIntPrintMaterial() {
    return this._selectedIntPrintMaterial;
  }
  setSelectedMaterialType(material) {
    this._selectedMaterialType = material;
  }
  get selectedMaterialType() {
    return this._selectedMaterialType;
  }
  setIntPrintPhotoPaper(paper) {
    this._intPrintPhotoPaper = paper;
  }
  get intPrintPhotoPaper() {
    return this._intPrintPhotoPaper;
  }
  setIntPrintBanner(banner) {
    this._intPrintBanner = banner;
  }
  get intPrintBanner() {
    return this._intPrintBanner;
  }
}
