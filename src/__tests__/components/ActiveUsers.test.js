import React from 'react';
import ActiveUsers from '../../components/ActiveUsers';
import { shallow } from 'enzyme';

describe('ActiveUsers component', () => {

    const props = {
        users: [],
        currentUser: "aasdfa_qereveq134"
    };

    it('Renders without crashing...', () => {
        const wrapper = shallow(
            <ActiveUsers
                {...props } />
        );
        expect(wrapper).toMatchSnapshot();
    });

});