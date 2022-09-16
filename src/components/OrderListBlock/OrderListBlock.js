import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import OrderList from "../OrderList/OrderList";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const OrderListBlock = observer(() => {
  const { order } = useContext(Context);
  return (
    <Card className="text-center mt-5 pb-4 ">
      <Card.Header>
        <h3>Состав заказа</h3>
      </Card.Header>

      {order.order.map((order) => (
        <OrderList key={order.random} order={order} />
      ))}
    </Card>
  );
});

export default OrderListBlock;
