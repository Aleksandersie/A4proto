import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { MAIN_ROUTE } from "../routeConst/routeConst";

const AuthPage = () => {
  const navigate = useNavigate();

  function logIn() {
    navigate(MAIN_ROUTE);
  }

  return (
    <Container
      className="d-flex justify-content-center align-content-center"
      style={{ marginTop: 50 }}
    >
      <Card
        className="p-5"
        style={{ width: 600, backgroundColor: "whitesmoke" }}
      >
        <Form className="d-flex flex-column">
          <h3 className="m-auto" style={{ textAlign: "center" }}>
            {"Авторизация"}
          </h3>
          <Form.Control className="mt-3" placeholder="Введите email" />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            type="password"
          />
          <Button variant={"success"} className=" mt-3 " onClick={logIn}>
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
