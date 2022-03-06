import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


export default function Input({secretWord}) {
    const [currentGuess, setCurrentGuess] = React.useState();
    const success = useSelector(state=>state.success);
    console.log(success)


    if( success ){
        return <div data-test="component-input" />
    }

    const HandleClick = (e) => {
        e.preventDefault(); // this will throw an error if you dont declare in tests.
        setCurrentGuess("");
        //setGuessedWord(currentGuess)
        // TODO: update guessedWords
        // TODO: check against secretWord and update success id needed
    }
    
  return (
    <div data-test="component-input">
        <form className='form-inline'>
            <input
                data-test="input-box"
                className='mb-2 mx-sm-3'
                type="text"
                placeholder='Enter guess'
                value={currentGuess}
                onChange={(e)=>{setCurrentGuess(e.target.value)}} 
            />

            <button data-test="submit-button" className="btn btn-primary mb-2" onClick={HandleClick}>
                Submit
            </button>
        </form>

    </div>
  )
}


Input.propTypes = {
    secretWord : PropTypes.string.isRequired
}