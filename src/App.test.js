import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {App} from './App';

describe("<App />", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App tasks={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const wrapper = renderer.create(<App tasks={[{name:'Task1', done:true}, {name:'Task2', done:false}]}/>).toJSON();
    expect(wrapper).toMatchSnapshot()
  })

});