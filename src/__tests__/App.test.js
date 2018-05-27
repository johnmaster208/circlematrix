import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

it('renders App without crashing', () => {
    const wrapper = shallow(
                      <Provider>
                        <App />
                      </Provider>
                    );
    expect(wrapper).toMatchSnapshot();
});
