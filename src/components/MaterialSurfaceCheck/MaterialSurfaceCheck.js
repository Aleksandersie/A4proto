import { Row } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox, Card } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState, useContext } from "react";
import { Context } from "../..";

const MaterialSurfaceCheck = observer(() => {
  const [glossy, setGlossy] = useState(true);
  const [matt, setMatt] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [white, setWhite] = useState(true);
  const { checkStore } = useContext(Context);

  const checkGlossy = (e) => {
    setGlossy(e.target.checked);
    setMatt(false);
    checkStore.setGlossy(e.target.checked);
    checkStore.setMatt(false);
    console.log({ checkStore });
  };
  const checkMatt = (e) => {
    setMatt(e.target.checked);
    setGlossy(false);
    checkStore.setMatt(e.target.checked);
    checkStore.setGlossy(false);
    console.log({ checkStore });
  };
  const checkTransparent = (e) => {
    setTransparent(e.target.checked);
    checkStore.setTransparent(e.target.checked);
    setWhite(false);
    checkStore.setWhite(false);
  };
  const checkWhite = (e) => {
    setWhite(e.target.checked);
    checkStore.setWhite(e.target.checked);
    setTransparent(false);
    checkStore.setTransparent(false);
  };
  return (
    <Row className="d-flex justify-content-center mt-4 ">
      <h5>Выберите фактуру</h5>
      <FormGroup className="d-flex justify-content-center flex-row mt-3 ">
        <Card variant="outlined" className="pt-1 ps-3 ms-3 shadow">
          <FormControlLabel
            control={<Checkbox />}
            checked={glossy}
            label="Глянецевая"
            value={glossy}
            onChange={checkGlossy}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={matt}
            label="Матовая"
            value={matt}
            onChange={checkMatt}
          />
        </Card>

        <Card variant="outlined" className="pt-1 ps-3 ms-3 shadow">
          <FormControlLabel
            control={<Checkbox />}
            checked={white}
            label="Белая"
            value={white}
            onChange={checkWhite}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={transparent}
            label="Прозрачная"
            value={transparent}
            onChange={checkTransparent}
          />
        </Card>
      </FormGroup>
    </Row>
  );
});
export default MaterialSurfaceCheck;
