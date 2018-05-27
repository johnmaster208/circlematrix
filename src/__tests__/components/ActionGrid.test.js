import React from 'react';
import ActionGrid from '../../components/ActionGrid';
import { shallow } from 'enzyme';

describe('ActionGrid component', () => {

    const props = {
        items: [],
        onClick: jest.fn()
    };

    it('Renders without crashing...', () => {
        const wrapper = shallow(
            <ActionGrid
                {...props } />
        );
        expect(wrapper).toMatchSnapshot();
    });

});