import { useContext } from "react";
import { Card, ToggleButton, Image } from "react-bootstrap";
import { Context } from "../..";

const AdditionalBlock = () => {
  const { AddService } = useContext(Context);
  return (
    <Card className="mt-5">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Дополнительные услуги</h4>
      </Card.Header>
      <div className="d-flex">
        {AddService.addList.map((add) => (
          <Card
            className="p-3 mt-3"
            style={{ width: 280, textAlign: "center" }}
          >
            <div
              style={{
                overflow: "hidden",
                width: 250,
                height: 130,
                borderRadius: 10
              }}
              className="shadow"
            >
              <Image src={add.img} width={300}></Image>
            </div>
            {add.desc}
          </Card>
        ))}
      </div>

      {/* <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        // checked={checked}
        value="1"
        // onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton> */}
    </Card>
  );
};

export default AdditionalBlock;
