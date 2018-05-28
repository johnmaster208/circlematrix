import React from 'react';
import ModalAlert from '../../components/ModalAlert';
import { shallow } from 'enzyme';

describe('ActionGrid component', () => {

    const props = {
        modalKey: "TUTORIAL",
        show: true,
        onClose: jest.fn()
    };

    it('Renders without crashing...', () => {
        const wrapper = shallow(
            <ModalAlert
                {...props } />
        );
        expect(wrapper).toMatchSnapshot();
    });

});