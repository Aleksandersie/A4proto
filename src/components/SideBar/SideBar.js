import React from "react";
import { Paper } from "@mui/material";
import style from "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <Paper
        elevation={3}
        className="pt-4 pb-4 sideBar"
        style={{ textAlign: "center" }}
      >
        Навигация?
      </Paper>
    </div>
  );
};

export default SideBar;
