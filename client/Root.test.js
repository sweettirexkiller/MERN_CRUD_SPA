import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<Root/>', ()=>{
    it('it renders  <Root /> without crashing', ()=>{
        // const div = document.createElement('div');
        // ReactDom.render(<Root/>, div);
        const component = shallow(<Root/>);
        expect(component).toHaveLength(1);
    })
});