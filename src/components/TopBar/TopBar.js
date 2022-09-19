import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TbCalculator } from "react-icons/tb";
import { FaUserCircle, FaInfoCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../../routeConst/routeConst";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
// const nav = useNavigate();
import s from "./TopBar.css";

const TopBar = observer(() => {
  const { user } = useContext(Context);
  const userData = [];
  function logIn() {
    user.setIsAuth(true);
    user.setUser();
  }

  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <Container className="">
        <NavLink
          to={MAIN_ROUTE}
          className="text-decoration-none"
          style={{ color: "white", fontSize: 22 }}
        >
          <div>
            {" "}
            <TbCalculator size="25" className="me-2 mb-1" style={{}} />
            TEST CALC
          </div>
        </NavLink>

        <Nav className="">
          <NavLink to={LOGIN_ROUTE}>
            <Button onClick={logIn} variant="warning">
              <FaUserCircle size="25px" className="me-2" />
              Авторизация
            </Button>
            <Button variant="warning" className="ms-3">
              <FaInfoCircle size="25px" className="me-2" />
              Помощь
            </Button>
          </NavLink>
          {/* {user.isAuth ? (*/}
          {/*  <NavLink to={LOGIN_ROUTE}>*/}
          {/*    <Button onClick={logIn} variant="warning">*/}
          {/*      Авторизация*/}
          {/*    </Button>*/}
          {/*  </NavLink>*/}
          {/*) : (*/}
          {/*  <NavLink to={LOGIN_ROUTE}>*/}
          {/*    <Button onClick={logIn} variant="warning">*/}
          {/*      123*/}
          {/*    </Button>*/}
          {/*  </NavLink>*/}
          {/*)} */}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default TopBar;
