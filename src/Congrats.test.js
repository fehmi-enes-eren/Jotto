import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import {findByTestAttr} from "../test/testUtils"

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Sha;;oWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const setup = (props={})=>shallow(<Congrats {...props}/>)


test("renders without an error", async ()=>{
    const wrapper = setup();
    const component = await findByTestAttr(wrapper, "component-congrats")
    expect(component.length).toBe(1)
})

test("renders no text when 'success' prop is false",async ()=>{
    const wrapper = setup({success: false})
    const component = await findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe("")
})

test("renders non-empty congrats message when 'success' is true",async ()=>{
    const wrapper = setup({success: true})
    const congratMessage = await findByTestAttr(wrapper, "congrats-message");
    expect(congratMessage.text().length).not.toBe(0)
})