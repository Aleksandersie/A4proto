import { Card } from "react-bootstrap";
import Lamination from "./Lamination/Lamination";
import BorderCut from "./BorderCut/BorderCut";
const AdditionalBlock = () => {
  return (
    <Card className="mt-5">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Дополнительные услуги</h4>
      </Card.Header>
      <div className="d-flex justify-content-center gap-5">
        <Lamination />
        <BorderCut />
      </div>
    </Card>
  );
};

export default AdditionalBlock;
