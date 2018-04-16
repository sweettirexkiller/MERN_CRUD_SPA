import React from 'react';
import PureAll from './All';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer from '../../store/reducers/index';

const middlewares = [thunk];

const mockStore = configureMockStore(reducer, middlewares);
import initialState from '../../store/initialState';

describe('<All/>', () => {


    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const component = mount(<PureAll store={store}/>);
        expect(component).toBeTruthy();
    });

    it('fetches meetings from store on componentDidMount', () => {
        //mock axios for getting the meetings
    });

    it('it renders loading component when fetching meetings', ()=>{
        //pass the prop of fetching as true, check is the component exists (find it)
    });

    it('maps through all meetings and displays them in the table', ()=>{
        //find them
    });
});