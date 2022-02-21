import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";



const setup = ()=>shallow(<Input />)


test('renders without an error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
});
