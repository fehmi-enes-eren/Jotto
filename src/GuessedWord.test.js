/* eslint-disable testing-library/await-async-query */
import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**  ///// Functional Tests ///////
 * Create wrapper with specified intial conditions 
 * then submit a guessed word of "train"
 # @function 
 *
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App Component
 */


 const setup = (state = {})=>{

    let wrapper = mount(<App />);

    // add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "train"}});


    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {}});

    return wrapper

 };


//  describe('invalid word guessed', () => { 
//     test.todo("guessedWords table does not get another row");
//   })

 describe.skip('no words guessed', () => { 
    let wrapper;

    beforeEach(()=>{
       wrapper = setup({
          success: false,
          secretWord: "party",
          guessedWords: []
       })
    });
    test("create GuessedWords table with one row", ()=>{
       const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
       expect(guessedWordRow).toHaveLength(1);
    });


     
  })
 describe.skip('some words guessed', () => { 

   let wrapper;

    beforeEach(()=>{
       wrapper = setup({
          success: false,
          secretWord: "party",
          guessedWords: [{guessedword: "train", letterMatchCount : 3}]
       })
    });
    
    test("add rows to guessedWords table",  ()=>{
       const guessedWordNodes =  findByTestAttr(wrapper, "guessed-word");
       expect(guessedWordNodes).toHaveLength(2);
    });

     
});

describe.skip('guess secret word', () => { 
   let wrapper;

   beforeEach(()=>{
      wrapper = setup({
         success: false,
         secretWord: "party",
         guessedWords: [{guessedWord: "agile", letterMatchCount: 1}]
      });
      
      const inputBox = findByTestAttr(wrapper, "input-box");
      const mockEvent = { target: {value: "party"}};
      inputBox.simulate("change" , mockEvent);

      const submitButton = findByTestAttr(wrapper, "submit-button");
      submitButton.simulate("click", { preventDefault(){}});
   });
   

   test("add rows to GuessedWords table", ()=>{
      const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordNodes).toHaveLength(3);
   });

   test("displays congrats component", ()=>{
      const congratsComponent = findByTestAttr(wrapper, "component-congrats");
      expect(congratsComponent.text().length).toBeGreaterThan(0);
   });

   test("does not display input component contents", ()=>{
       const inputBox = findByTestAttr(wrapper, "input-box");
       expect(inputBox.exists()).toBe(false);

       const submitButton = findByTestAttr(wrapper, "submit-button");
       expect(submitButton.exists()).toBe(false);
   });
});



