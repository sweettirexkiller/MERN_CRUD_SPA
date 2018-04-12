/**
 * @jest-environment node
 */

import React from 'react';
import ReactDom from 'react-dom';
import Root from '../../client/components/Root';
import { shallow } from 'enzyme';

describe('<Root/>', ()=>{
    it('it renders  <Root /> without crashing', ()=>{
        // const div = document.createElement('div');
        // ReactDom.render(<Root/>, div);
        const component = shallow(<Root/>);
        expect(component).toHaveLength(1);
    })
});