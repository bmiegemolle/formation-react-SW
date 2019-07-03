import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import Task from "./Task";

describe("<Task />", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Task />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it('matches snapshot', () => {
    const handleToggle = jest.fn()
    const wrapper = renderer.create(<Task handleToggle={handleToggle} name='Task name' done/>).toJSON();
    expect(wrapper).toMatchSnapshot()
  })

});
