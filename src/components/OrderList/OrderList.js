import { Card, Col, Container, Form, Row, Accordion } from "react-bootstrap";
import React from "react";

const OrderList = ({ order }) => {
  return (
    <Card
      className="mt-4 pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm"
      style={{ minWidth: 300, backgroundColor: "whitesmoke" }}
    >
      <Col md={2}>
        <h6 className="m-auto" style={{ textAlign: "center" }}>
          {"Описание"}
        </h6>
        <p>{order.description}</p>
      </Col>
      <Col md={2}>
        <h6 className="m-auto" style={{ textAlign: "center" }}>
          {"Размеры"}
        </h6>
        <p>
          {order.width}x{order.height}
        </p>
      </Col>
      <Col md={2}>
        <h6 className="m-auto" style={{ textAlign: "center" }}>
          {"Количество"}
        </h6>
        <p>{order.count}</p>
      </Col>
      <Col md={2}>
        <h6 className="m-auto" style={{ textAlign: "center" }}>
          {"Категория заказа"}
        </h6>
        <p>{order.type}</p>
      </Col>
      <Col md={2}>
        <h6 className="m-auto" style={{ textAlign: "center" }}>
          {"Категория заказа"}
        </h6>
        <p>{order.material}</p>
      </Col>
    </Card>
  );
};

export default OrderList;
