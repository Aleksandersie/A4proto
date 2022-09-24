import React, { useContext, useState } from "react";
import { Card, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Row } from "react-bootstrap";
import { Context } from "../../index";

const LaminationCheck = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const { checkStore } = useContext(Context);

  const checkYes = (e) => {
    setYes(e.target.checked);
    setNo(false);
    checkStore.setLamination(e.target.checked);
    console.log(checkStore);
  };
  const checkNo = (e) => {
    setNo(e.target.checked);
    setYes(false);
    checkStore.setLamination(false);
    console.log(checkStore);
  };

  return (
    <Row className="d-flex justify-content-center mt-4 ">
      <h5>Ламинация</h5>
      <FormGroup className="d-flex justify-content-center flex-row mt-3 ">
        <Card variant="outlined" className="pt-1 ps-3 ms-3 shadow">
          <FormControlLabel
            control={<Checkbox />}
            checked={yes}
            label="Да"
            value={yes}
            onChange={checkYes}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={no}
            label="Нет"
            value={no}
            onChange={checkNo}
          />
        </Card>
      </FormGroup>
    </Row>
  );
};

export default LaminationCheck;
