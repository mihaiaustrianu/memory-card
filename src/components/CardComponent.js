import { Card } from "react-bootstrap";
function CardComponent(props) {
  return (
    <Card border="dark" bg="dark" text="light" style={{ width: "30rem" }}>
      <Card.Img height={"400rem"} variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
