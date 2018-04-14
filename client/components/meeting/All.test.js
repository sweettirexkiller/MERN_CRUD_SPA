import React from 'react';
import All from './All';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
import initialState from '../../store/initialState';

describe('<All/>', () => {

    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const component = mount(<Provider store={store}><All/></Provider>);
        expect(component).toBeTruthy();
    });
});