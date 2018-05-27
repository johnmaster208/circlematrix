import React from 'react';
import ActionCircleCounter from '../../components/ActionCircleCounter';
import { shallow } from 'enzyme';

describe('ActionCircleCounter component', () => {

    const props = {
        counter: 7
    };

    it('Renders without crashing...', () => {
        const wrapper = shallow(
            <ActionCircleCounter {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});