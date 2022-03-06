import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils"
import App from './App'; // anywhere in the app if the functions calls, it will go directly to MockedFunction
import { getSecretWord as mockGetSecretWord } from "./actions";
import { Provider } from "react-redux";



// activate global mock to make sure getSecretWord doesn't make network calls
// keeping useEffect calls only once the component is loaded

jest.mock("./actions");


/**
 * Setup function for App Component
 * @returns { Wrapper }
 */

const setup = () => {
  // use mount instead shallow, because useEffect not called on "Shallow";
  const store = storeFactory();
  return mount(<Provider store={store}><App /></Provider>)
};

test('renders without an error',async () => {
  const wrapper = setup();
  const appComponent = await findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1)
});

describe("get secret word",()=>{
  beforeEach(()=>{
    //clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  })
  test("getSecretWord on app mount", ()=>{
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", ()=>{
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setPros because wrapper.update() doesn't trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
})