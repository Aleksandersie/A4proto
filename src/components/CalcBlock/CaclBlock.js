import React from "react";
import { Card } from "react-bootstrap";
import CalcInputBlock from "../CalcInputBlock/CalcInputBlock";

const CalcBlock = () => {
  return (
    <Card className="text-center mt-5">
      <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
        Калькулятор расчета печати на плёнке
      </Card.Header>
      <Card.Body>
        <Card.Title>Введите параметры:</Card.Title>
        <CalcInputBlock />
      </Card.Body>
    </Card>
  );
};

export default CalcBlock;
