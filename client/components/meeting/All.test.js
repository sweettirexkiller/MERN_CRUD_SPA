import React from 'react';
import PureAll from './All';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer from '../../store/reducers/index';

const middlewares = [thunk];

const mockStore = configureMockStore(reducer,middlewares);
import initialState from '../../store/initialState';

describe('<All/>', () => {

    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const component = mount(<PureAll store={store}/>);
        expect(component).toBeTruthy();
    });
});