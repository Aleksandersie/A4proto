import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";

const TopBreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mt-4 ms-4">
      <Link underline="hover" color="inherit" href="/">
        Категории работ
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Тип работ
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Параметры заказа
      </Link>
    </Breadcrumbs>
  );
};

export default TopBreadCrumbs;
