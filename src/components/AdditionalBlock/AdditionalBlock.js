import {useContext, useState} from "react";
import { Card, ToggleButton, Image } from "react-bootstrap";
import { Context } from "../..";

const AdditionalBlock = () => {

  const [lamination,setLamination] = useState(false)
  function lam(e){
     setLamination(e)
     console.log(lamination)
  }
  const { AddService } = useContext(Context);
  return (
    <Card className="mt-5">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Дополнительные услуги</h4>
      </Card.Header>
      <div className="d-flex justify-content-center gap-5">
        {AddService.addList.map((add) => (
          <Card
            className="mt-3 mb-3 pb-1"
            style={{ width: 280, textAlign: "center" }}
          >
              <Card.Header style={{fontWeight:500}} >{add.name}</Card.Header>
              <Card.Img variant="top" src={add.img} style={{borderRadius:0,height:150}}></Card.Img>
              <Card.Text style={{marginTop:10}}>{add.desc}</Card.Text>

              <ToggleButton
        className="mb-3 ms-3 me-3"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={lamination}
        value="1"
         onChange={(e) => setLamination(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>

          </Card>
        ))}
      </div>


    </Card>
  );
};

export default AdditionalBlock;
