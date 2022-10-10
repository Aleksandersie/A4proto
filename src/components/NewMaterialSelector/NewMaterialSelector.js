import React, { useContext } from "react";
import { Card, ListGroup, Button, Image } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { ImageList } from "@mui/material";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const NewMaterialSelector = observer(() => {
  const { materialList } = useContext(Context);
  function selectVinyl(v) {
    console.log(v);
    materialList.setSelectedMaterial(v);
  }
  function selectSpecVinyl(v) {
    materialList.setSelectedMaterial(v);
  }
  return (
    <Card className="mt-4 pb-4">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Выберите материал</h4>
      </Card.Header>
      <div className="d-flex flex-row">
        <div className="col-6 ">
          <div style={{ textAlign: "center" }} className="ms-5">
            {materialList.selectedMaterial.name ? (
              <Card className="mt-5  shadow" style={{ overflow: "hidden" }}>
                <Image
                  width={350}
                  style={{ width: "100%" }}
                  src={materialList.selectedMaterial.imgLink}
                ></Image>
              </Card>
            ) : (
              <div>
                {" "}
                <Card
                  className="mt-5  shadow"
                  style={{ overflow: "hidden", width: 400, height: 350 }}
                >
                  <AiOutlineQuestionCircle
                    style={{ fontSize: 150 }}
                    className="m-auto"
                  />
                </Card>
              </div>
            )}
            <h5 className="mt-3">{materialList.selectedMaterial.name}</h5>
            <h6>{materialList.selectedMaterial.brand}</h6>
            <p>{materialList.selectedMaterial.description}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="mt-3" style={{ textAlign: "center" }}>
            {/*<h5>Стандартные плёнки:</h5>*/}
            {materialList.selectedIntPrintMaterial.name === "Плёнка" ? (
              <h5>Стандартные плёнки:</h5>
            ) : (
              <div></div>
            )}
            {materialList.selectedIntPrintMaterial.name === "Бумага" ? (
              <h5>Бумага:</h5>
            ) : (
              <div></div>
            )}
            {materialList.selectedIntPrintMaterial.name === "Баннер" ? (
              <h5>Баннер:</h5>
            ) : (
              <div></div>
            )}
          </div>
          <ListGroup className="ms-5 me-5">
            {materialList.selectedMaterialType.map((v) => (
              <Button
                key={v.id}
                className="mt-2"
                variant={
                  v.name === materialList.selectedMaterial.name
                    ? "danger"
                    : "warning"
                }
                style={{ color: "black" }}
                onClick={() => selectVinyl(v)}
              >
                {v.name}
              </Button>
            ))}
          </ListGroup>
          {materialList.selectedIntPrintMaterial.name !== "Плёнка" ? (
            <div></div>
          ) : (
            <div>
              <div className="mt-3" style={{ textAlign: "center" }}>
                <h5>Специальные плёнки:</h5>
              </div>
              <ListGroup className="ms-5 me-5">
                {materialList._specVinyl.map((v) => (
                  <Button
                    key={v.id}
                    className="mt-2"
                    variant={
                      v.name === materialList.selectedMaterial.name
                        ? "danger"
                        : "warning"
                    }
                    style={{ color: "black" }}
                    onClick={() => selectSpecVinyl(v)}
                  >
                    {v.name}
                  </Button>
                ))}
              </ListGroup>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
});

export default NewMaterialSelector;
