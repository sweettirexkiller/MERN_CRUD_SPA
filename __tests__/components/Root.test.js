/**
 * @jest-environment node
 */

import React from 'react';
import Root from '../../client/components/Root';
import { shallow } from 'enzyme';

describe('<Root/>', ()=>{
    it('renders 1 <Root /> component', ()=>{
        const component = shallow(<Root/>);
        expect(component).toHaveLength(1);
    })
});