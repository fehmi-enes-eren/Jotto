import {shallow} from 'enzyme';
import Congrats from './Congrats';
import {findByTestAttr, checkProps} from "../test/testUtils"



/**
 * Factory function to create a Sha;;oWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const defaultProps = {success:false}// it is kinda dangerous to use defaultProps if you change it, tests may still pass?
const setup = (props={})=>{
    // accept the default prop but overwrite it if it changes with the argument
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps}/>)
}

test("does not throw warning with expected props", ()=> {
    checkProps(Congrats, defaultProps);
});


test("renders without an error", async ()=>{
    const wrapper = setup({success: false});
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

