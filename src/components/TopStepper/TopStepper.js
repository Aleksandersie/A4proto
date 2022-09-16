import React from "react";
import { Col, Row } from "react-bootstrap";
import { Paper, Step, StepLabel, Stepper } from "@mui/material";

const TopStepper = () => {
  const steps = [
    "Выберите категорию работ",
    "Выберите тип работ",
    "Введите параметры заказа",
    "Заказ отправлен",
  ];

  return (
    <Paper elevation={3} className="pt-3 pb-3">
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default TopStepper;
