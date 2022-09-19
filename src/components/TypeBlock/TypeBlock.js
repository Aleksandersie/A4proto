import React from "react";
import { Paper } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { INT_PRINT, INT_PRINT_CALC } from "../../routeConst/routeConst";
import TypeCard from "../CategoryCard/TypeCard/TypeCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const TypeBlock = () => {
  const category = [
    {
      name: "Интерьерная печать",
      path: INT_PRINT_CALC,
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/IMG_7252-scaled-e1603785789466.jpg"
    },
    {
      name: "Печать и контурная резка",
      path: INT_PRINT,
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg"
    },
    {
      name: "Печать и резка с ламинацией",
      path: INT_PRINT,
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki.jpg"
    }
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
    <Paper
      elevation={3}
      className="ps-5 pe-5 mt-4 pb-5 pt-4"
      style={{ textAlign: "center" }}
    >
      <AiOutlineArrowLeft
        style={{ display: "flex", fontSize: 25, cursor: "pointer" }}
        onClick={goBack}
      />
      <h3>Выберите тип работ</h3>

      <Row className="d-flex justify-content-around">
        {category.map((cat) => (
          <Col className="col-4 mt-3" key={cat.name}>
            <TypeCard name={cat.name} path={cat.path} imgLink={cat.imgLink} />
          </Col>
        ))}
      </Row>
    </Paper>
  );
};

export default TypeBlock;
