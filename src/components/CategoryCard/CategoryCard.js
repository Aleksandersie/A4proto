import React from "react";
import { Paper } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import PrintCutCard from "./PrintCutCard/PrintCutCard";

const CategoryCard = () => {
  return (
    <Paper className="mt-4" elevation={3} className="ps-5 pe-5 mt-4 pb-5 pt-4">
      <Row className="d-flex justify-content-around">
        <Col className="col-4 mt-3">
          <PrintCutCard />
        </Col>
        <Col className="col-4 mt-3">
          <PrintCutCard />
        </Col>
        <Col className="col-4 mt-3">
          <PrintCutCard />
        </Col>
      </Row>
    </Paper>
  );
};

export default CategoryCard;
