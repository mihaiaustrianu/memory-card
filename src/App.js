import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";


import GameContainer from "./components/GameContainer";
import { useState } from "react";
import { Button } from "react-bootstrap";


function App() {

  const [refArray,setRefArray] = useState([]);

  const [score,setScore] = useState(0);

  const [highScore,setHighScore] = useState(0);

  const [gameActive,setGameActive] =useState(false);

  const incrementScore = () =>{
    setScore((prevScore) => prevScore + 1);
    console.log(score);
  }

  const handleHighScore = () => {
    setHighScore(score);
  }
  const handleReset=()=>{
    setScore(0);
    setGameActive(false);
    setRefArray([]);
  }
  const handleChoice = (cardName) =>{
    if(!refArray.includes(cardName))
    {
      updateArray(cardName);
      incrementScore();
    }
    else{
      handleHighScore();
      handleReset()
    }
  }
 
  const updateArray = (cardName) =>{
    setRefArray([...refArray,cardName])
    console.log(refArray);
  }

  const playGame = ()=>{
    setGameActive(true);
  }

  return (
    <div className="reactDiv">
      <NavbarComponent score={score} highScore={highScore}></NavbarComponent>
      { gameActive 
      ? <GameContainer handleChoice={handleChoice} score={score}/>
      : <div class='button-container'><Button onClick={playGame}variant="secondary">Play Game</Button></div>
      }
    </div>
  );
}

export default App;
