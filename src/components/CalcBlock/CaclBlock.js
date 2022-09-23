import React from "react";
import { Card } from "react-bootstrap";
import CalcInputBlock from "../CalcInputBlock/CalcInputBlock";
import { Paper } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import s from "./CalckBlock.module.css";

const CalcBlock = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Paper elevation={3} style={{ textAlign: "center" }} className="mt-4">
      <Card className="text-center ">
        <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
          <div className={s.block}>
            <AiOutlineArrowLeft
              style={{
                display: "flex",
                fontSize: 25,
                cursor: "pointer",
                position: "absolute",
                top: 10
              }}
              onClick={goBack}
            />
            <div> Калькулятор расчета печати на плёнке</div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Введите размеры:</Card.Title>
          <CalcInputBlock />
        </Card.Body>
      </Card>
    </Paper>
  );
};

export default CalcBlock;
