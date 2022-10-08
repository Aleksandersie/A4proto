import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Card, ToggleButton } from "react-bootstrap";
import { Context } from "../../..";

const BorderCut = observer(() => {
  const { checkStore } = useContext(Context);
  const [border, setBorder] = useState(false);
  function borderCut(e) {
    setBorder(e);
    checkStore.setBorderCut(e);
    console.log("b");
  }
  const img = "http://expographica.ru/images/12_08_16/001.jpg";
  return (
    <Card
      className="mt-3 mb-3 pb-1"
      style={{ width: 280, textAlign: "center" }}
    >
      <Card.Header style={{ fontWeight: 500 }}>
        Обрезка по периметру
      </Card.Header>
      <Card.Img
        variant="top"
        src={img}
        style={{ borderRadius: 0, height: 150 }}
      ></Card.Img>
      <Card.Text style={{ marginTop: 10 }}>
        Сквозная резка продукции с подложкой
      </Card.Text>
      <ToggleButton
        className="mb-3 ms-3 me-3"
        style={{ color: "black" }}
        id="toggle-check2"
        type="checkbox"
        variant={checkStore.borderCut === true ? "danger" : "warning"}
        checked={border}
        onChange={(e) => borderCut(e.target.checked)}
      >
        Выбрать
      </ToggleButton>
    </Card>
  );
});

export default BorderCut;
