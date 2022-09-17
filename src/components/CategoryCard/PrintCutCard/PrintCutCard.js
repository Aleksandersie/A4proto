import img from "../../../Static/etiketki1.jpg";
import { Button } from "react-bootstrap";
import { Card, CardContent, CardMedia } from "@mui/material";

const PrintCutCard = () => {
  const test = () => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent style={{ textAlign: "center" }}>
        <h4>Интерьерная печать</h4>
        <p></p>
        <Button variant="warning" onMouseEnter={test}>
          Выбрать
        </Button>
      </CardContent>
    </Card>
  );
};

export default PrintCutCard;
