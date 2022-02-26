import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils"
import App from './App';

/**
 * Setup function for App Component
 * @returns { ShallowWrapper }
 */

const setup = () => shallow(<App />);

test('renders without an error',async () => {
  const wrapper = setup();
  const appComponent = await findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1)
});

