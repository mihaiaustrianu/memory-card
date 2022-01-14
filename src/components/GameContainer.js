import { Container } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function GameContainer(props) {
  const [cardContent, setCardContent] = useState([
    { description: "Bulbasaur", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",wasClicked:false },
    { description: "Charmander", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",wasClicked:false },
    { description: "Squirtle", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" ,wasClicked:false},
    { description: "Pidgey", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" ,wasClicked:false},
    { description: "Rattata", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png" ,wasClicked:false},
    { description: "Ekans", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png" ,wasClicked:false},
    { description: "Pikachu", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" ,wasClicked:false},
    { description: "Nidoran", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png" ,wasClicked:false},
    { description: "Clefairy", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" ,wasClicked:false},
    { description: "Vulpix", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png" ,wasClicked:false},
    { description: "Jigglypuff", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" ,wasClicked:false},
    { description: "Oddish", imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png" ,wasClicked:false},
    
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
    <Container >
      <p>{cardContent.description}</p>
      <Row md="3"lg="4" sd="2">
        {cardContent.map((cardContent, idx) => (
          <Col key = {cardContent.description} onClick={()=>props.handleChoice(cardContent.description)}>
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
