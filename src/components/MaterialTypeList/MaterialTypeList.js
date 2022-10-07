import { Card,Button } from "react-bootstrap";
import { Context } from "../..";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

const MaterialTypeList = observer(() => {
  const { materialList } = useContext(Context);
  return (
    <Card style={{ textAlign: "center"}} className="pb-3" >
      <Card.Header>
        <h4>Выберите тип материала</h4>
      </Card.Header>
        <div className="d-flex justify-content-evenly">{materialList.intPrintMaterial.map((material) => (
            <Card style={{minWidth:180,width:230}} className="mt-3 pb-3">
                <Card.Header>{material.name}</Card.Header>
                <div style={{overflow:"hidden"}}> <Card.Img src={material.img} style={{height:150,width:245, borderRadius:0}}></Card.Img></div>
                <Card.Text className="mt-1">{material.desc}</Card.Text>
                <Button variant="warning" style={{width:150}} className="m-auto">Выбрать</Button>

            </Card>
        ))}</div>

    </Card>
  );
});

export default MaterialTypeList;
