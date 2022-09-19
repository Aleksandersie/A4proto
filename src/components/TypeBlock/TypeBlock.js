import React from "react";
import { Paper } from "@mui/material";
import { Row, Col, Card } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
} from "../../routeConst/routeConst";
import TypeCard from "../CategoryCard/TypeCard/TypeCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TypeBlock.css";
import s from "../CalcBlock/CalckBlock.module.css";
import CalcInputBlock from "../CalcInputBlock/CalcInputBlock";
const TypeBlock = () => {
  const category = [
    {
      name: "Интерьерная печать",
      path: INT_PRINT_CALC,
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/IMG_7252-scaled-e1603785789466.jpg",
    },
    {
      name: "Печать и контурная резка",
      path: INT_PRINT_CUT,
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg",
    },
    {
      name: "Наклейки с ламинацией",
      path: INT_PRINT,
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki.jpg",
    },
  ];
  let head = null;

  const location = useLocation();
  if (location.pathname === "/intPrint") {
    head = true;
  }
  console.log(head);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Card className="text-center mt-4 shadow ">
      <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
        <div className={s.block}>
          <AiOutlineArrowLeft
            style={{
              display: "flex",
              fontSize: 25,
              cursor: "pointer",
              position: "absolute",
              top: 10,
            }}
            onClick={goBack}
          />
          <div>Выберите тип работ</div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Row className="d-flex justify-content-around">
          {category.map((cat) => (
            <Col className="col-4 mt-3" key={cat.name}>
              <TypeCard name={cat.name} path={cat.path} imgLink={cat.imgLink} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TypeBlock;
