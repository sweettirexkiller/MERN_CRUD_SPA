import React from 'react';

import configureMockStore from 'redux-mock-store';
import meetings from '../../store/reducers/meetingReducer';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
const middlewares = [thunk, promise];
const mockStore = configureMockStore(meetings, middlewares);
import initialState from '../../store/initialState';

import {PureAll} from "./All";
import {mount} from 'enzyme';
import {Provider} from "react-redux";

describe('<All/>', () => {

    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const wrapper = mount(<PureAll store={store}/>);
    });
});