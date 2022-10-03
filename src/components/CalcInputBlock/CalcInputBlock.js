import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import startTest from "../../calcLogic/calc";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { TextField } from "@mui/material";
import MaterialSurfaceCheck from "../MaterialSurfaceCheck/MaterialSurfaceCheck";
import LaminationCheck from "../LaminationCheck/LaminationCheck";
import BorderCutCheck from "../BorderCutCheck/BorderCutCheck";
import { orderList } from "../../calcLogic/calc";
const CalcInputBlock = observer(() => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [description, setDescription] = useState("Наклейки");
  const [count, setCount] = useState(1);
  const [preFlight, setPreFlight] = useState({ area: 0, areaTotal: 0 });
  const { price } = useContext(Context);
  const { materialList } = useContext(Context);
  const { order } = useContext(Context);
  const { checkStore } = useContext(Context);
  function start() {
    let result = startTest(
      width,
      height,
      description,
      count,
      materialList.selectedMaterial.name,
      checkStore.lamination,
      checkStore.glossy,
      checkStore.matt,
      checkStore.transparent,
      checkStore.white,
      checkStore.borderCut
    );
    order.setOrder(result);
  }
  console.log(`w:${width} h:${height}`);
  useEffect(() => {
    let area = (width * height).toFixed(3);
    let areaT = (area * count).toFixed(3);
    let oneCount = (area*price.priceList.vinyl).toFixed(3)
    let totalCount = (areaT*price.priceList.vinyl).toFixed(2)
    setPreFlight({ area: area, areaTotal: areaT,priceOneCount: oneCount, priceTotal: totalCount });
  }, [width, height, count]);
  return (
    <div className=" ">
      <Form className="mt-4 m-auto">
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

      <div className="d-flex justify-content-evenly">
        <LaminationCheck />
        <BorderCutCheck />
        <div>test{preFlight.area}</div>
      </div>
      <div style={{ textAlign: "center" }} className="mt-4">
        <h5>Результаты расчета</h5>
        <div
          style={{ textAlign: "center" }}
          className="mt-4 d-flex justify-content-center gap-3"
        >
          <div className="d-flex">
            <div style={{ fontWeight: 700, marginRight: 5 }}>
              Общая площадь:
            </div>
            {preFlight.areaTotal}
          </div>
          <div className="d-flex">
            <div style={{ fontWeight: 700, marginRight: 5 }}>
              Площадь одной штуки:
            </div>
            {preFlight.area}
          </div>
          <div className="d-flex">
            <div style={{ fontWeight: 700, marginRight: 5 }}>
              Стоимость одной штуки:
            </div>
            {preFlight.priceOneCount}
          </div>
          <div className="d-flex">
            <div style={{ fontWeight: 700, marginRight: 5 }}>
              Общая стоимость:
            </div>
            {preFlight.priceTotal}
          </div>
        </div>
      </div>

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
            {"Прикрепите файл"}
          </h6>
          <Form.Control className="mt-2" placeholder="" type="file" />
        </Col>
      </Row>
    </div>
  );
});

export default CalcInputBlock;
