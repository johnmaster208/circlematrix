import React from 'react';
import ActionCircle from '../../components/ActionCircle';
import { shallow } from 'enzyme';

describe('ActionCircle component', () => {

    const item = {
        key: 0,
        fillColor: { color: "#fff"}
    }
    const onClick = jest.fn();
    const isOccupied = false;


    it('Renders without crashing...', () => {
        const wrapper = shallow(
            <ActionCircle 
                item={item} 
                onClick={onClick} 
                isOccupied={isOccupied} />
        );
        expect(wrapper).toMatchSnapshot();
    });

});