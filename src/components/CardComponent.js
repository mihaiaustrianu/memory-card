import { Card } from "react-bootstrap";
function CardComponent(props) {
  return (
    <Card border="dark" bg="dark" text="light" style={{ width: "15rem" }}>
      <Card.Img height={"200rem"} variant="bottom" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
