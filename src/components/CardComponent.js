import { Card } from "react-bootstrap";
function CardComponent(props) {
  return (
    <Card className="mb-2 ml-1 mr-1" border="dark" bg="dark" text="light" style={{ width: "15rem" }}>
      <Card.Img height={"200rem"} variant="bottom" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
