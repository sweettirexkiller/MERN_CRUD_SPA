import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<Root/>', ()=>{
    it('it renders  <Root /> without crashing', ()=>{
        const component = shallow(<Root/>);
        expect(component).toBeTruthy();
    })
});