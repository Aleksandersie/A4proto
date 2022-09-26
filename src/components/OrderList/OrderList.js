import { Card, Col, Container, Form, Row, Accordion } from "react-bootstrap";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const OrderList = ({ order }) => {
  const removeItem = (number) => {
    // order.setOrder(order.order.filter((or) => or.random !== number));
  };
  return (
    // <Card
    //   className="mt-4 pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm"
    //   style={{ minWidth: 300, backgroundColor: "whitesmoke" }}
    // >
    //   <Col md={2}>
    //     <h6 className="m-auto" style={{ textAlign: "center" }}>
    //       {"Описание"}
    //     </h6>
    //     <p>{order.description}</p>
    //   </Col>
    //   <Col md={2}>
    //     <h6 className="m-auto" style={{ textAlign: "center" }}>
    //       {"Размеры"}
    //     </h6>
    //     <p>
    //       {order.width}x{order.height}
    //     </p>
    //   </Col>
    //   <Col md={2}>
    //     <h6 className="m-auto" style={{ textAlign: "center" }}>
    //       {"Количество"}
    //     </h6>
    //     <p>{order.count}</p>
    //   </Col>
    //   <Col md={2}>
    //     <h6 className="m-auto" style={{ textAlign: "center" }}>
    //       {"Категория заказа"}
    //     </h6>
    //     <p>{order.type}</p>
    //   </Col>
    //   <Col md={2}>
    //     <h6 className="m-auto" style={{ textAlign: "center" }}>
    //       {"Категория заказаТест"}
    //     </h6>
    //     <p>{order.material}</p>
    //   </Col>
    // </Card>
    <Accordion className="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Card
            className=" pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-3"
            style={{
              minWidth: 300,
              backgroundColor: "whitesmoke",
              width: "100% ",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: 130 }}>
              <h6>{"Описание"}</h6>
              <p>{order.description}</p>
            </div>
            <div className="" style={{ textAlign: "center" }}>
              <h6>{"Размеры"}</h6>
              <p>
                {order.width}x{order.height}
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Количество"}</h6>
              <p>{order.count}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Категория заказа"}</h6>
              <p>{order.orderType}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Материал"}</h6>
              <p>{order.material}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Удалить"}</h6>
              <AiFillDelete onClick={() => removeItem(order.random)} />
            </div>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Card
            //className=" pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-3"
            className="   ms-4 me-5 shadow-sm"
            style={{
              minWidth: 300,
              backgroundColor: "whitesmoke",
              width: "inherit",
            }}
          >
            <div
              className=" pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-3"
              style={{
                minWidth: 300,
                backgroundColor: "whitesmoke",
                width: "inherit",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h6>{"Обрезка в формат"}</h6>
                <p>{order.borderCut ? "Да" : "Нет"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Фактура пленки"}</h6>
                <p>{order.glossy ? "Глянец" : "Мат"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Тип пленки"}</h6>
                <p>{order.white ? "Белая" : "Прозрачная"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Ламинация"}</h6>
                <p>{order.lamination ? "Да" : "Нет"}</p>
              </div>
            </div>
            <div
              className=" pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-3"
              style={{
                minWidth: 300,
                backgroundColor: "whitesmoke",
                width: "inherit",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h6>{"Площадь единицы"}</h6>
                <p></p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Общая площадь"}</h6>
                <p></p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h6>{"Стоимость единицы"}</h6>
                <p></p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h6>{"Общая стоимость"}</h6>
                <p></p>
              </div>
            </div>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default OrderList;
