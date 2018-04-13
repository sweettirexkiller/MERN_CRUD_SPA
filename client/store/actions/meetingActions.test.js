import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './meetingActions';
import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('Meeting actions', () => {
    afterEach(() => {
        mock.reset();
        mock.restore();
    });

    it('dispatch STARTED and FULFILLED on fetchAll', () => {
        mock
            .onGet('/api/meeting').reply(200, {
            body: [{
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
            }],
            headers: {
                'content-type': 'application/json'
            }
        });

        const expectedActions = [
            {type: 'FETCH_MEETINGS_STARTED'},
            {
                type: 'FETCH_MEETINGS_FULFILLED',
                "payload": {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": [
                        {
                            "__v": 0,
                            "_id": "5acf1300f35217676965f4bb",
                            "date": "2018-04-12T10:04:00.000Z",
                            "email": "aleksandra.jankiewicz@ritz.edu",
                            "firstName": "Aleksandra",
                            "lastName": "Jankiewicz",
                        },
                        {
                            "__v": 0,
                            "_id": "5acf1332f35217676965f4bc",
                            "date": "2018-04-25T10:05:00.000Z",
                            "email": "piotr@yankievich.io",
                            "firstName": "Piotr",
                            "lastName": "Jankiewicz",
                        },
                    ],
                },
            }
        ];

        const store = mockStore({
            meetings: [],
            meeting: {},
            fetching: false,
            fetched: false,
            adding: false,
            added: false,
            updating: false,
            updated: false,
            deleting: false,
            deleted: false,
            errors: {},
        });

        return store.dispatch(actions.fetchMeetings()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
})
;