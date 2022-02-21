import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";



const setup = (secretWord="party")=>shallow(<Input secretWord={secretWord}/>)


test('renders without an error',async () => {
    const wrapper = setup();
    const inputComponent = await findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", ()=>{
    checkProps(Input, {secretWord: "party"});
})