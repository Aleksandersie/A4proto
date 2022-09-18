import React from "react";
import { Paper } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import TypeCard from "./PrintCutCard/TypeCard";
import { INT_PRINT } from "../../routeConst/routeConst";

const CategoryCard = () => {
  const category = [
    { name: "Интерьерная печать", path: INT_PRINT },
    { name: "Цифровая печать", path: INT_PRINT },
    { name: "Плоттерная резка", path: INT_PRINT },
  ];
  return (
    <Paper className="mt-4" elevation={3} className="ps-5 pe-5 mt-4 pb-5 pt-4">
      <Row className="d-flex justify-content-around">
        {category.map((cat) => (
          <Col className="col-4 mt-3" key={cat.name}>
            <TypeCard name={cat.name} path={cat.path} />
          </Col>
        ))}
      </Row>
    </Paper>
  );
};

export default CategoryCard;
