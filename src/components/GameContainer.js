import { Container } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Row, Col,Button } from "react-bootstrap";
import { useState, useEffect } from "react";
function GameContainer(props) {
  const [cardContent, setCardContent] = useState([
    { description: "1asdas", imgSrc: "",wasClicked:false },
    { description: "2dsaa", imgSrc: "",wasClicked:false },
    { description: "3asd", imgSrc: "" ,wasClicked:false},
    { description: "4ads", imgSrc: "" ,wasClicked:false},
    { description: "5dsa", imgSrc: "" ,wasClicked:false},
    { description: "6dsa", imgSrc: "" ,wasClicked:false},
    { description: "7dsa", imgSrc: "" ,wasClicked:false},
    { description: "8sda", imgSrc: "" ,wasClicked:false},
  ]);
  const score = props.score;

  const shuffleArray = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCardContent = [...cardContent];
    shuffleArray(newCardContent);
    setCardContent(newCardContent)
  }, [score]);

  return (
    <Container fluid>
      <p>{cardContent.description}</p>
      <Row xs={1} md={2} lg={2} className="justify-content-center">
        {cardContent.map((cardContent, idx) => (
          <Col  key = {cardContent.description} onClick={()=>props.handleChoice(cardContent.description)}>
            <CardComponent
              description={cardContent.description}
              imgSrc={cardContent.imgSrc} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default GameContainer;
