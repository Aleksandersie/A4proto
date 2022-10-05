import { useContext, useState } from "react";
import { Card, ToggleButton, Image } from "react-bootstrap";
import { Context } from "../..";
import Lamination from "./Lamination/Lamination";

const AdditionalBlock = () => {
  const [lamination, setLamination] = useState(false);
  function lam(e) {
    setLamination(e);
    console.log(lamination);
  }
  const { AddService } = useContext(Context);
  return (
    <Card className="mt-5">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Дополнительные услуги</h4>
      </Card.Header>
      <div className="d-flex justify-content-center gap-5">
        <Lamination />
      </div>
    </Card>
  );
};

export default AdditionalBlock;
