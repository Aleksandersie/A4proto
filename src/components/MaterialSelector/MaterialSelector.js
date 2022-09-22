import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import s from "../CalcBlock/CalckBlock.module.css";
import TypeCard from "../CategoryCard/TypeCard/TypeCard";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const MaterialSelector = observer(() => {
  const { materialList } = useContext(Context);
  console.log({ materialList });
  return (
    <div>
      <Container>
        <Card className="text-center mt-4 shadow ">
          <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
            <div>
              <div>Выберите материал</div>
            </div>
          </Card.Header>
          <Card.Body className="d-flex justify-content-around gap-2">
            {/* <Card.Title></Card.Title> */}

            {materialList.list.map((l) => (
              <Card key={l.id}>
                <Card.Header>{l.name}</Card.Header>
                <Card.Body className="pt-3 m-auto">
                  <div>{l.desc}</div>
                  <NavLink to={l.path}>
                    <Button
                      variant="warning"
                      className="mt-3"
                      disabled={l.id === materialList.selectedMaterial.id}
                      onClick={() => materialList.setSelectedMaterial(l)}
                    >
                      {l.name}
                    </Button>
                  </NavLink>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
});

export default MaterialSelector;
