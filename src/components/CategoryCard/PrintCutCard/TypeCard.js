import img from "../../../Static/etiketki1.jpg";
import { Button } from "react-bootstrap";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { MAIN_ROUTE, INT_PRINT } from "../../../routeConst/routeConst";

const TypeCard = ({ name, path }) => {
  const test2 = () => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ opacity: 0.2 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent style={{ textAlign: "center" }}>
        <h5>{name}</h5>
        <p></p>
        <NavLink to={path}>
          <Button variant="warning">Выбрать</Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default TypeCard;
