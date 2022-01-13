import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";


import GameContainer from "./components/GameContainer";
import { useEffect, useState } from "react";


function App() {

  const [refArray,setRefArray] = useState([]);

  const [score,setScore] = useState(0);

  const [highScore,setHighScore] = useState(0);

  const incrementScore = () =>{
    setScore(score + 1);
    console.log(score);
  }

  const handleHighScore = () => {
    setHighScore(score);
  }
  const handleReset=()=>{
    setHighScore(0);
    setScore(0);
  }
  const handleChoice = (cardName) =>{
    if(!refArray.includes(cardName))
    {
      updateArray(cardName);
      incrementScore();
    }
    else{
      handleHighScore();
      handleReset();
    }
  }

  const updateArray = (cardName) =>{
    setRefArray([...refArray,cardName])
    console.log(refArray);
  }

  return (
    <div className="App">
      <NavbarComponent score={score} highScore={highScore}></NavbarComponent>
      <GameContainer handleChoice={handleChoice} score={score}/>
      
    </div>
  );
}

export default App;
