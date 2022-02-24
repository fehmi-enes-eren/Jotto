import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";



// mock entire module for destructuring useState on import /////
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react",()=>({
//     ...jest.requireActual("react"),
//     useState: (initialState) =>[initialState, mockSetCurrentGuess]
// }))




const setup = (success=false, secretWord="party")=>shallow(<Input success={success} secretWord={secretWord}/>)

describe('render', () => {
    describe('succes is true', () => {
        
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(true)
        })
        test('renders without an error',async () => {
            const inputComponent = await findByTestAttr(wrapper, "component-input");
            expect(inputComponent.length).toBe(1);
        });
        test("input box does not show", async ()=>{
            const inputBox = await findByTestAttr(wrapper, "input-box");
            expect(inputBox.exists()).toBe(false);
        })
        test("submit button does not show", async ()=>{
            const submitButton = await findByTestAttr(wrapper, "submit-button");
            expect(submitButton.exists()).toBe(false);
        })
     });

     describe('success is false', () => { 
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(false);
        })
        test('renders without an error',async () => {
            const inputComponent = await findByTestAttr(wrapper, "component-input");
            expect(inputComponent.length).toBe(1);
        });
        test("input box shows", async ()=>{
            const inputBox = await findByTestAttr(wrapper, "input-box");
            expect(inputBox.exists()).toBe(true);
        })
        test("submit button shows", async ()=>{
            const submitButton = await findByTestAttr(wrapper, "submit-button");
            expect(submitButton.exists()).toBe(true);
        })
      })
})



test("does not throw warning with expected props", ()=>{
    checkProps(Input, {secretWord: "party"});
})

describe("state controlled input field",()=>{

    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    // We are storing the originalUseState before we overwrite it.
    // And bringing it back once we are done  in each step.
    // It follows in JS order.
    let originalUseState;
    
    beforeEach(async ()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState; // 1
        React.useState = jest.fn(()=>["", mockSetCurrentGuess]); // 2

        wrapper = setup();
        
    })
    afterEach(()=>{
        React.useState = originalUseState; // 3
    })

    test("state updates with value of input box upon change",async ()=>{
        
        const inputBox = await findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");

    });

    test("field is cleared upon submit button click",async ()=>{

        const submitButton = await findByTestAttr(wrapper, "submit-button");
        // We are creating an event with one propert which is the function and does nothing but it will avoid the error.
        submitButton.simulate("click", {preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })

})