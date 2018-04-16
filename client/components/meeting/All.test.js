import React from 'react';
import {PureAll} from './All';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer from '../../store/reducers/index';
import {connect} from 'react-redux';

const middlewares = [thunk];

const mockStore = configureMockStore(reducer, middlewares);
import initialState from '../../store/initialState';

describe('<All/>', () => {

    const mapStateToProps = (state) => {
        return {
            meetings: state.meeting.meetings,
            fetching: state.meeting.fetching,
            fetched: state.meeting.fetched
        }
    };


    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const AllComponent = connect(mapStateToProps)(PureAll);
        const component = mount(<AllComponent store={store}/>);//crashes on fetch and mapping
        expect(component).toBeTruthy();
    });

    it('fetches meetings from store on componentDidMount', () => {
        // expect(compnentDidMount to be called)
        //mock axios for getting the meetings
    });

    it('it renders loading component when fetching meetings', () => {
        //pass the prop of fetching as true, check is the component exists (find it)
    });

    it('maps through all meetings and displays them in the table', () => {
        //find them
    });
});