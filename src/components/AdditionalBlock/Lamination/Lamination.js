import { Button, Card, ToggleButton } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";

import { Context } from "../../../index";

const Lamination = observer(() => {
  const { checkStore } = useContext(Context);
  const [lamination, setLamination] = useState(false);
  function lam(e) {
    setLamination(e);
    checkStore.setLamination(e);
    console.log(lamination);
    console.log({ checkStore });
  }
  const img = "https://i.ytimg.com/vi/oyIB4r6CCA0/hqdefault.jpg";

  return (
    <Card
      className="mt-3 mb-3 pb-1"
      style={{ width: 280, textAlign: "center" }}
    >
      <Card.Header style={{ fontWeight: 500 }}>Ламинация</Card.Header>
      <Card.Img
        variant="top"
        src={img}
        style={{ borderRadius: 0, height: 150 }}
      ></Card.Img>
      <Card.Text style={{ marginTop: 10 }}>
        Дополнительная защита изображения от повреждений
      </Card.Text>
      <ToggleButton
        className="mb-3 ms-3 me-3"
        style={{ color: "black" }}
        id="toggle-check"
        type="checkbox"
        //variant="outline-warning"
        variant={checkStore.lamination === true ? "danger" : "warning"}
        checked={lamination}
        onChange={(e) => lam(e.target.checked)}
      >
        Выбрать
      </ToggleButton>
    </Card>
  );
});

export default Lamination;
