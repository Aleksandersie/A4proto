import img from "../../../Static/etiketki1.jpg";
import { Button } from "react-bootstrap";
import { Card, CardContent, CardMedia } from "@mui/material";

const PrintCutCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent style={{ textAlign: "center" }}>
        <h4>Интерьерная печать</h4>
        <p>
          Интерьерная широкоформатная печать подходит для декорирования и
          брендирования помещений, рекламных конструкций.
        </p>
        <Button variant="warning">Выбрать</Button>
      </CardContent>
    </Card>
  );
};

export default PrintCutCard;
