import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import startTest from "../../calcLogic/calc";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { TextField } from "@mui/material";
import { BiRuble } from "react-icons/bi";
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
    let areaT = (area * count).toFixed(2);
    let oneCount = area * price.priceList.vinyl;
    let totalCount = areaT * price.priceList.vinyl;
    let minOrder = 500 / oneCount;
    if (minOrder === Infinity) {
      minOrder = "";
    }
    let countPerMeter = 1 / area;
    if (countPerMeter === Infinity) {
      countPerMeter = "";
    }
    console.log(minOrder);
    setPreFlight({
      area: area,
      areaTotal: areaT,
      priceOneCount: oneCount,
      priceTotal: totalCount,
      minOrder: minOrder,
      countPerMeter: countPerMeter,
    });
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
        {/* <LaminationCheck />
        <BorderCutCheck /> */}
      </div>
      <div style={{ textAlign: "center" }} className="mt-4 ms-3 me-3">
        <h5>Результаты расчета</h5>

        <Table striped bordered hover size="sm" className="mt-4">
          <thead>
            <tr>
              <th colSpan={4}>
                Размеры изделия: {width}x{height} м. Количество: {count} шт.{" "}
                <br /> Материал: {materialList.selectedMaterial.name}
              </th>
            </tr>
            <tr>
              <th>Общая площадь:</th>
              <th>Площадь одной штуки:</th>
              <th>Стоимость одной штуки:</th>
              <th>Общая стоимость:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{preFlight.areaTotal}</td>
              <td>{preFlight.area}</td>
              <td>
                {preFlight.priceOneCount} <BiRuble />
              </td>
              <td>
                {preFlight.priceTotal} <BiRuble />
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Минимальный заказ:</th>
              <th>Штук на м2:</th>
              <th>Ламинация:</th>
              <th>Подрезка:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{preFlight.minOrder}</td>
              <td>{preFlight.countPerMeter}</td>
              <td>{checkStore.lamination ? "Да" : "Нет"} </td>
              <td>{checkStore.borderCut ? "Да" : "Нет"} </td>
            </tr>
          </tbody>
        </Table>
        {/*</div>*/}
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
