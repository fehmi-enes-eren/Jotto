import React, {useState} from "react"
import './App.css';
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from './Input';
import { getLetterMatchCount } from "./helpers"

function App() {
  const [guessedWords, setGuessedWords] = useState([]);
  // const [guessedWord, setGuessedWord] = useState("");
  const success = false;
  const secretWord = "party";

  // React.useEffect(()=>{
  //   if(guessedWord !== ""){
  //       let count = getLetterMatchCount(guessedWord, secretWord);
  //       setGuessedWords([...guessedWords, {guessedWord: guessedWord, letterMatchCount: count}]);
  //   }
    
  // },[guessedWord])

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
      
    </div>
  );
}

export default App;
