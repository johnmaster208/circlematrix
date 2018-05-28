import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MockStore from '../utils/NativeJestStore';

it('renders App without crashing', () => {
    const wrapper = shallow(
      <Provider store={MockStore({state: {}})}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
});