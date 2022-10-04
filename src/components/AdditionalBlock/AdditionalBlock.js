import { Card, ToggleButton } from "react-bootstrap";

const AdditionalBlock = () => {
  return (
    <Card className="mt-5">
      <Card.Header style={{ textAlign: "center" }}>
        <h4>Дополнительные услуги</h4>
      </Card.Header>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        // checked={checked}
        value="1"
        // onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
    </Card>
  );
};

export default AdditionalBlock;
