import { Card, Col, Container, Form, Row, Accordion } from "react-bootstrap";
import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../../index";
import { orderClear, orderList } from "../../calcLogic/calc";

const OrderList = ({ orderItem }) => {
  const { order } = useContext(Context);

  const removeItem = (number) => {
    orderClear();
    order.setOrder(order.order.filter((or) => or.random !== number));
    //let test = orderList.filter((el) => el.random !== number);
    console.log({ order });
    // console.log({ orderList });
    // console.log(test);
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
              <p>{orderItem.description}</p>
            </div>
            <div className="" style={{ textAlign: "center" }}>
              <h6>{"Размеры"}</h6>
              <p>
                {orderItem.width}x{orderItem.height}
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Количество"}</h6>
              <p>{orderItem.count}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Категория заказа"}</h6>
              <p>{orderItem.orderType}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Материал"}</h6>
              <p>{orderItem.material}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Удалить"}</h6>
              <AiFillDelete onClick={() => removeItem(orderItem.random)} />
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
                <p>{orderItem.borderCut ? "Да" : "Нет"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Фактура пленки"}</h6>
                <p>{orderItem.glossy ? "Глянец" : "Мат"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Тип пленки"}</h6>
                <p>{orderItem.white ? "Белая" : "Прозрачная"}</p>
              </div>
              <div style={{ textAlign: "center", maxWidth: 130 }}>
                <h6>{"Ламинация"}</h6>
                <p>{orderItem.lamination ? "Да" : "Нет"}</p>
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
