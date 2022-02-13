import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWord from "./GuessedWord";
import propTypes from "prop-types";


const defaultProps = {
    guessedWords: [
        {guessedWord: "train", letterMatchCount: 3}
    ]
}
/**
 * Factory function to create a ShallowWrapper for the GuessedWord component.
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWord {...setupProps}/>)
}

test("does not throw warning with expected props", ()=> {
    checkProps(GuessedWord, defaultProps)
});

describe("if there are no words guessed", ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]});
    })

    test("renders without error", async ()=> {
        const component = await findByTestAttr(wrapper, "component-guessed-word");
        expect(component.length).toBe(1)
    });

    test("renders instructions to guess a word", async ()=> {
        const instructions = await findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0)
    });

});

describe("if there are words guessed", ()=>{
    
})