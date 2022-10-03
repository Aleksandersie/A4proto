import React from "react";
import { Paper } from "@mui/material";
import { Row, Col, Card } from "react-bootstrap";
import TypeCard from "./TypeCard/TypeCard";
import {
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
} from "../../routeConst/routeConst";
import { useLocation } from "react-router-dom";
import s from "../CalcBlock/CalckBlock.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const CategoryBlock = () => {
  const category = [
    {
      name: "Интерьерная печать",
      path: INT_PRINT_CALC,
      text: "Рабочая ветка",
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/maxresdefault-e1603785569284.jpg",
    },
    {
      name: "Печать и контурная резка",
      path: INT_PRINT_CUT,
      text: "Тестовый текст",
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg",
    },
    {
      name: "Цифровая печать",
      path: INT_PRINT,
      text: "В разработке",
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/flaery.jpg",
    },
    {
      name: "Плоттерная резка",
      path: INT_PRINT,
      text: "В разработке",
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/plotternaya_rezka4.jpg",
    },
    {
      name: "Стенды и таблички",
      path: INT_PRINT,
      text: "В разработке",
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/ugolok-potrebitelya.jpg",
    },
    {
      name: "Ролл ап стенды",
      path: INT_PRINT,
      text: "В разработке",
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/09/menu7.png",
    },
  ];

  const location = useLocation();
  console.log(location);

  return (
    <Card className="text-center mt-4 mb-4 shadow ">
      <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
        <div className={s.block}>
          <div>Выберите категорию</div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Row className="d-flex justify-content-around">
          {category.map((cat) => (
            <Col className="col-4 mt-3" key={cat.name}>
              <TypeCard
                name={cat.name}
                path={cat.path}
                text={cat.text}
                imgLink={cat.imgLink}
              />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CategoryBlock;
