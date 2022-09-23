import { Row } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox, Card } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState, useContext } from "react";
import { Context } from "../..";

const MaterialCheck = observer(() => {
  const [glossy, setGlossy] = useState(true);
  const { checkStore } = useContext(Context);
  const test = () => {
    checkStore.setGlossy(true);
    console.log({ checkStore });
  };

  return (
    <Row className="d-flex justify-content-center mt-4 ">
      <h5>Выберите фактуру</h5>
      <FormGroup className="d-flex justify-content-center flex-row mt-3 ">
        <Card variant="outlined" className="pt-1 ps-3 ms-3 shadow">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Глянецевая"
            value={glossy}
            onClick={test}
          />
          <FormControlLabel control={<Checkbox />} label="Матовая" />
        </Card>

        <Card variant="outlined" className="pt-1 ps-3 ms-3 shadow">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Белая"
          />
          <FormControlLabel control={<Checkbox />} label="Прозрачная" />
        </Card>
      </FormGroup>
    </Row>
  );
});
export default MaterialCheck;
