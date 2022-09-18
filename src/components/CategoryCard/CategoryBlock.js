import React from "react";
import { Paper } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import TypeCard from "./TypeCard/TypeCard";
import { INT_PRINT } from "../../routeConst/routeConst";

const CategoryBlock = () => {
  const category = [
    {
      name: "Интерьерная печать",
      path: INT_PRINT,
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/maxresdefault-e1603785569284.jpg",
    },
    {
      name: "Цифровая печать",
      path: INT_PRINT,
      imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/flaery.jpg",
    },
    {
      name: "Плоттерная резка",
      path: INT_PRINT,
      imgLink:
        "https://a4-yug.ru/wp-content/uploads/2020/10/plotternaya_rezka4.jpg",
    },
  ];

  return (
    <Paper className="mt-4" elevation={3} className="ps-5 pe-5 mt-4 pb-5 pt-4">
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

export default CategoryBlock;
