import { Card, Button } from "react-bootstrap";
import { Context } from "../..";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

const MaterialTypeList = observer(() => {
  const { materialList } = useContext(Context);
  function selectType(material) {
    materialList.setSelectedIntPrintMaterial(material); //подсветка кнопки и заголовок селектора
    if (material.name === "Плёнка") {
      console.log("Выбрана пленка");
      materialList.setSelectedMaterialType(materialList.vinyl);
    }
    if (material.name === "Баннер") {
      console.log("Выбран баннер");
      materialList.setSelectedMaterialType(materialList.intPrintBanner);
    }
    if (material.name === "Бумага") {
      console.log("Выбрана бумага");
      materialList.setSelectedMaterialType(materialList.intPrintPhotoPaper);
    }

    console.log({ materialList });
  }
  return (
    <Card style={{ textAlign: "center" }} className="pb-3 mt-3">
      <Card.Header>
        <h4>Выберите тип материала</h4>
      </Card.Header>
      <div className="d-flex justify-content-evenly">
        {materialList.intPrintMaterial.map((material) => (
          <Card
            style={{ minWidth: 180, width: 230 }}
            className="mt-3 pb-3"
            key={material.id}
          >
            <Card.Header style={{ fontWeight: 500 }}>
              {material.name}
            </Card.Header>
            <div style={{ overflow: "hidden" }}>
              {" "}
              <Card.Img
                src={material.img}
                style={{ height: 150, width: 245, borderRadius: 0 }}
              ></Card.Img>
            </div>
            <Card.Text className="mt-1">{material.desc}</Card.Text>
            <Button
              variant={
                material.id === materialList.selectedIntPrintMaterial.id
                  ? "danger"
                  : "warning"
              }
              style={{ width: 150 }}
              className="m-auto"
              onClick={() => selectType(material)}
            >
              Выбрать
            </Button>
          </Card>
        ))}
      </div>
    </Card>
  );
});

export default MaterialTypeList;
