import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Button, Card, Container } from "react-bootstrap";

const MaterialList = observer(() => {
  const { materialList } = useContext(Context);
  console.log({ materialList });
  return (
    <Card className="mt-4">
      <Card.Header>
        <h4 style={{ textAlign: "center" }}>Выберите материал</h4>
      </Card.Header>
      <div className="d-flex flex-row gap-3 pe-4 ps-4 justify-content-between mt-3 pt-4 pb-3">
        {materialList.vinyl.map((vinyl) => (
          <Button
            key={vinyl.id}
            variant="outline-warning"
            style={{ color: "black" }}
          >
            {vinyl.name}
          </Button>
        ))}
      </div>
    </Card>

    // {materialList.vinyl.map((vinyl) => (
    //   <div key={vinyl.id}>{vinyl.name}</div>
    // ))}
  );
});

export default MaterialList;
