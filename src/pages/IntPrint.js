import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar/SideBar";
import TopStepper from "../components/TopStepper/TopStepper";
import TopBreadCrumbs from "../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const IntPrint = () => {
  return (
    <Container>
      <Row>
        <Col className="col-3 mt-4">
          <SideBar />
        </Col>
        <Col className="col-9 mt-4">
          <TopStepper />
          <TopBreadCrumbs />
        </Col>
      </Row>
    </Container>
  );
};

export default IntPrint;
