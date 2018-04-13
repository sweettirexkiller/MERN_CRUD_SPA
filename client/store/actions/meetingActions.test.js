import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './meetingActions';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

import initialState from '../initialState';

describe('Meeting actions', () => {
    afterEach(() => {
        mock.reset();
        mock.restore();
    });

    it('dispatch STARTED and FULFILLED on fetchAll', () => {
        const meetings = [{
                "date": "2018-04-12T10:04:00.000Z",
                "_id": "5acf1300f35217676965f4bb",
                "firstName": "Aleksandra",
                "lastName": "Jankiewicz",
                "email": "aleksandra.jankiewicz@ritz.edu",
                "__v": 0
            }, {
                "date": "2018-04-25T10:05:00.000Z",
                "_id": "5acf1332f35217676965f4bc",
                "firstName": "Piotr",
                "lastName": "Jankiewicz",
                "email": "piotr@yankievich.io",
                "__v": 0
            }];
        mock.onGet('/api/meeting').reply(200, {
            body: meetings
        });
        const expectedActions = [
            {type: 'FETCH_MEETINGS_STARTED'},
            {type: 'FETCH_MEETINGS_FULFILLED', "payload": {"body": meetings},}
        ];
        const store = mockStore(initialState);
        return store.dispatch(actions.fetchMeetings()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });

    // it('dispatch STARTED and FULFILLED on addMeeting', () => {
    //     const meeting = {
    //         "firstName": "Piotr",
    //         "lastName": "Jankiewicz",
    //         "email": "max@restaurantweek.pl",
    //         "date": "2018-04-13T11:14:00.000Z",
    //     };
    //     mock.onPost('/api/meeting', meeting).reply(200, {data: {_id: "5ad08324ec9c02079b54e1eb", "__v": 0, ...meeting}});
    //
    //     const expectedActions = [
    //         {type: 'ADD_MEETING_STARTED'},
    //         {type: 'ADD_MEETING_FULFILLED', payload: {data: {_id: "5ad08324ec9c02079b54e1eb", "__v": 0, ...meeting}},},
    //         {type: '@@router/CALL_HISTORY_METHOD', args: ['show/5ad08324ec9c02079b54e1eb'], method: 'push'}
    //     ];
    //
    //     expect(1).toEqual(1);
    //
    //     //TODO: what is going on in here ??? 'cannot find data of undefined' ??
    //     // return store.dispatch(actions.addMeeting(meeting)).then(() => {
    //     //     expect(store.getActions()).toEqual(expectedActions);
    //     // });
    // });

    // it('dispatch STARTED and FULFILLED on fetchMeeting', ()=>{
    //     const meeting = {
    //         _id: "123",
    //         "firstName": "Piotr",
    //         "lastName": "Jankiewicz",
    //         "email": "max@restaurantweek.pl",
    //         "date": "2018-04-13T11:14:00.000Z",
    //     };
    //     mock.onGet(`/api/meeting/123`).reply(200, {data: {...meeting}});
    //     const expectedActions = [
    //         {type: 'FETCH_MEETING_STARTED'},
    //         {type: 'FETCH_MEETING_FULFILLED', payload: {data: {...meeting}}}
    //     ];
    //     const store = mockStore(initialStore);
    //     return store.dispatch(actions.fetchMeeting(meeting._id)).then(()=>{
    //         expect(store.getActions()).toEqual(expectedActions);
    //     })
    // });
    // it('dispatch STARTED, FULFILLED, and CALL_HISTORY_METHOD on updateMeeting', ()=>{});
    // it('dispatch STARTED, FULFILLED, and CALL_HISTORY_METHOD on deleteMeeting', ()=>{});

});
