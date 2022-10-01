import React, { useContext } from "react";
import { Card, ListGroup, Button, Image } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { ImageList } from "@mui/material";

const NewMaterialSelector = observer(() => {
  const { materialList } = useContext(Context);
  function selectVinyl(v) {
    //materialList.setSelectedVinyl(v);
    materialList.setSelectedMaterial(v);
  }
  function selectSpecVinyl(v) {
    // materialList.setSelectedSpecVinyl(v);
    materialList.setSelectedMaterial(v);
  }
  return (
    <Card className="mt-4">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Выберите материал</h4>
      </Card.Header>
      <div className="d-flex">
        <div className="col-6 ">
          <Card className="mt-5 ms-5">
            <Image
              width={350}
              src={materialList.selectedMaterial.imgLink}
            ></Image>
          </Card>
        </div>
        <div className="col-6">
          <div className="mt-3" style={{ textAlign: "center" }}>
            <h5>Стандартные плёнки:</h5>
          </div>
          <ListGroup className="ms-5 me-5">
            {materialList.vinyl.map((v) => (
              <Button
                key={v.id}
                className="mt-2"
                variant={
                  v.id === materialList.selectedVinyl.id
                    ? "warning"
                    : "outline-warning"
                }
                style={{ color: "black" }}
                onClick={() => selectVinyl(v)}
              >
                {v.name}
              </Button>
            ))}
          </ListGroup>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <h5>Специальные плёнки:</h5>
          </div>
          <ListGroup className="ms-5 me-5">
            {materialList._specVinyl.map((v) => (
              <Button
                key={v.id}
                className="mt-2"
                variant={
                  v.name === materialList.selectedSpecVinyl.name
                    ? "warning"
                    : "outline-warning"
                }
                style={{ color: "black" }}
                onClick={() => selectSpecVinyl(v)}
              >
                {v.name}
              </Button>
            ))}
          </ListGroup>
        </div>
      </div>
      {materialList.selectedMaterial.name}
    </Card>
  );
});

export default NewMaterialSelector;
