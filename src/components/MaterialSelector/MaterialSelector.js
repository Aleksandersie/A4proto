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
          <Card.Body>
            <Card.Title></Card.Title>
            <div>
              {materialList.list.map((l) => (
                <NavLink to={l.path}>
                  <Button
                    key={l.id}
                    variant="warning"
                    className="ms-3"
                    disabled={l.id === materialList.selectedMaterial.id}
                    onClick={() => materialList.setSelectedMaterial(l)}
                  >
                    {l.name}
                  </Button>
                </NavLink>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
});

export default MaterialSelector;
