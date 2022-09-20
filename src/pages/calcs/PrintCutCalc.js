import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopStepper from "../../components/TopStepper/TopStepper";
import TopBreadCrumbs from "../../components/TopBreadCrumbs/TopBreadCrumbs";
import CalcBlock from "../../components/CalcBlock/CaclBlock";
import OrderListBlock from "../../components/OrderListBlock/OrderListBlock";
import MaterialSelector from "../../components/MaterialSelector/MaterialSelector";

const PrintCutCalc = () => {
  return (
    <Container>
      <Row>
        <Col className="col-3 mt-4">
          <SideBar />
        </Col>
        <Col className="col-9 mt-4">
          <TopStepper />
          <TopBreadCrumbs />
          <MaterialSelector />
        </Col>
      </Row>
    </Container>
  );
};

export default PrintCutCalc;
