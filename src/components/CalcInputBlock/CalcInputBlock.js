import React, { useContext, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import startTest from "../../calcLogic/calc";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { TextField } from "@mui/material";

const CalcInputBlock = observer(() => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [description, setDescription] = useState("Наклейки");
  const [count, setCount] = useState(0);
  const [coast, setCoast] = useState(0);
  console.log(count);
  const { materialList } = useContext(Context);
  const { order } = useContext(Context);
  const { price } = useContext(Context);
  function start() {
    let result = startTest(
      width,
      height,
      description,
      count,
      materialList.selectedMaterial.name
    );
    order.setOrder(result);
    price.setPrice(coast);
    console.log(order);
    console.log(price);
  }

  return (
    <div className="pb-4">
      <Form className="mt-5 m-auto">
        <Row className="m-auto justify-content-center align-items-end">
          <Col md={2}>
            <h6 className="m-auto" style={{ textAlign: "center" }}>
              {"Длина"}
            </h6>
            {/*<Form.Control*/}
            {/*  className="mt-2"*/}
            {/*  placeholder="Введите длину"*/}
            {/*  type="number"*/}
            {/*  value={width}*/}
            {/*  onChange={(e) => setWidth(e.target.value)}*/}
            {/*/>*/}
            <TextField
              className="mt-3"
              id="standard-basic"
              label="Введите длину"
              type="number"
              variant="standard"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <h6 className="m-auto" style={{ textAlign: "center" }}>
              {"Ширина"}
            </h6>
            {/*<Form.Control*/}
            {/*  className="mt-2"*/}
            {/*  placeholder="Введите ширину"*/}
            {/*  type="number"*/}
            {/*  value={height}*/}
            {/*  onChange={(e) => setHeight(e.target.value)}*/}
            {/*/>*/}
            <TextField
              className="mt-3"
              id="standard-basic"
              label="Введите ширину"
              type="number"
              variant="standard"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <h6 className="m-auto" style={{ textAlign: "center" }}>
              {"Количество"}
            </h6>
            {/*<Form.Control*/}
            {/*  className="mt-2"*/}
            {/*  placeholder="Введите количество"*/}
            {/*  type="number"*/}
            {/*  value={count}*/}
            {/*  onChange={(event) => setCount(Number(event.target.value))}*/}
            {/*/>*/}
            <TextField
              className="mt-3"
              id="standard-basic"
              label="Введите количество"
              type="number"
              variant="standard"
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
            />
          </Col>
          <Col md={2}>
            <Button variant="warning" onClick={start}>
              Добавить в заказ
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={3}>
          <h6 className="m-auto" style={{ textAlign: "center" }}>
            {"Описание заказа"}
          </h6>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="mt-2"
            placeholder="Введите описание"
          />
        </Col>
        <Col md={3}>
          <h6 className="m-auto" style={{ textAlign: "center" }}>
            {"Файл"}
          </h6>
          <Form.Control className="mt-2" placeholder="Файл" type="file" />
        </Col>
        <Col md={3}>
          <h6 className="m-auto" style={{ textAlign: "center" }}>
            {"Стоимость"}
          </h6>
          <Form.Control
            type="number"
            value={coast}
            onChange={(event) => setCoast(Number(event.target.value))}
            className="mt-2"
            placeholder="Стоимость"
          />
        </Col>
      </Row>
    </div>
  );
});

export default CalcInputBlock;
