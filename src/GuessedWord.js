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
    }
  return (
    <div data-test="component-guessed-word">
        { content }
    </div>
  )
}

GuessedWord.propTypes = {
    guessedWord: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
    
}