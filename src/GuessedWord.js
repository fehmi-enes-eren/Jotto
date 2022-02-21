import React from 'react';
import PropTypes from 'prop-types';

export default function GuessedWord(props) {
    let content ; 
    if(props.guessedWords.length === 0){
        content = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index)=>{
            return <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        })
        content = (
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className="thead-dark">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }



  return (
    <div data-test="component-guessed-words">
        { content }
    </div>
  )
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
    
}