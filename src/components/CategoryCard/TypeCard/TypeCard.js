import img from "../../../Static/etiketki1.jpg";
import { Button } from "react-bootstrap";
import { Card, CardContent, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

import { useState } from "react";

const TypeCard = ({ name, path, imgLink, text }) => {
  const test2 = () => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  };
  // const [text, setText] = useState("");
  // const add = () => {
  //   setText("qwerty");
  // };
  // const out = () => {
  //   setText("");
  // };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      // onMouseEnter={add}
      // onMouseLeave={out}
      style={{ minHeight: 282 }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="140"
        image={imgLink}
        alt="green iguana"
      />
      <CardContent style={{ textAlign: "center" }}>
        <div style={{ fontSize: 15, fontWeight: "800" }}>{name}</div>
        <p>{text}</p>
        {/* {text} */}

        <NavLink to={path}>
          <Button
            variant="warning"
            className="mt-5"
            disabled={text === "В разработке"}
          >
            Выбрать
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default TypeCard;
