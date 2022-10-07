import { Card } from "react-bootstrap";
import { Context } from "../..";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

const MaterialTypeList = observer(() => {
  const { materialList } = useContext(Context);
  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Header>
        <h4>Выберите тип материала</h4>
      </Card.Header>
      {materialList.intPrintMaterial.map((mat) => (
        <Card>{mat.name}</Card>
      ))}
    </Card>
  );
});

export default MaterialTypeList;
