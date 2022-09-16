import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalcBlock from "../components/CalcBlock/CaclBlock";
import OrderListBlock from "../components/OrderListBlock/OrderListBlock";
import TopStepper from "../components/TopStepper/TopStepper";
import SideBar from "../components/SideBar/SideBar";
import TopBreadCrumbs from "../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const MainPage = () => {
  const { order } = useState();
  console.log(order);
  return (
    <Container>
      <Row>
        <Col className="col-3 mt-4">
          <SideBar />
        </Col>
        <Col className="col-9 mt-4">
          <TopStepper />
          <TopBreadCrumbs />
          <CategoryCard />
        </Col>
      </Row>

      {/*<CalcBlock />*/}
      {/*<OrderListBlock />*/}
    </Container>
  );
};

export default MainPage;
