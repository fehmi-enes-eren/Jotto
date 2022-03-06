import React, {useState, useEffect} from "react"
import './App.css';
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from './Input';
import { getLetterMatchCount } from "./helpers";
import { getSecretWord } from "./actions"

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
    
  // },[guessedWord]);

  useEffect(()=>{
    getSecretWord();
  },[])

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
      
    </div>
  );
}

export default App;
