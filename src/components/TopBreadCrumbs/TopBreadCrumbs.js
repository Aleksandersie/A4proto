import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../../routeConst/routeConst";

const TopBreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mt-4 ms-4">
      <NavLink
        to={MAIN_ROUTE}
        style={{ textDecoration: "none", color: "gray" }}
      >
        Категории работ
      </NavLink>
      <NavLink
        to={MAIN_ROUTE}
        style={{ textDecoration: "none", color: "gray" }}
      >
        Тип работ
      </NavLink>
      <NavLink
        to={MAIN_ROUTE}
        style={{ textDecoration: "none", color: "gray" }}
      >
        Параметры заказа
      </NavLink>
    </Breadcrumbs>
  );
};

export default TopBreadCrumbs;
