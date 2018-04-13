import reducer from './meetingReducer';
import initialState from '../initialState';
describe('meetings reducer', ()=>{
    it('should return the initial state', ()=>{
       expect(reducer(undefined,{})).toEqual(initialState);
    });

    it('should handle FETCH_MEETINGS_STARTED', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETINGS_STARTED'})).toEqual({fetching: true});
    });
    it('should handle FETCH_MEETINGS_FULFILLED', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETINGS_FULFILLED', payload:'meetings'})).toEqual({fetching: false, fetched: true, meetings: 'meetings'});
    });
    it('should handle FETCH_MEETINGS_ERROR', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETINGS_ERROR', payload: 'this is error'})).toEqual({fetching: false, fetched: false, errors: 'this is error'});
    });

    it('should handle ADD_MEETING_STARTED', ()=>{
        expect(reducer({}, {type: 'ADD_MEETING_STARTED'})).toEqual({adding: true})
    });
    it('should handle ADD_MEETING_FULFILLED', ()=>{
        expect(reducer({}, {type: 'ADD_MEETING_FULFILLED', payload:'meeting object'})).toEqual({adding:false, added: true, meeting: 'meeting object'})
    });
    it('should handle ADD_MEETING_ERROR', ()=>{
        expect(reducer({}, {type: 'ADD_MEETING_ERROR', payload: 'error'})).toEqual({adding: false, added: false, errors: 'error'})
    });

    it('should handle FETCH_MEETING_STARTED', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETINGS_STARTED'})).toEqual({fetching: true});
    });
    it('should handle FETCH_MEETING_FULFILLED', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETING_FULFILLED', payload:'meeting'})).toEqual({fetching: false, fetched: true, meeting: 'meeting'});
    });
    it('should handle FETCH_MEETING_ERROR', ()=>{
        expect(reducer({}, {type: 'FETCH_MEETINGS_ERROR', payload: 'this is error'})).toEqual({fetching: false, fetched: false, errors: 'this is error'});
    });

    it('should handle UPDATE_MEETING_STARTED', ()=>{
        expect(reducer({}, {type: 'UPDATE_MEETING_STARTED'})).toEqual({updating: true});
    });
    it('should handle UPDATE_MEETING_FULFILLED', ()=>{
        expect(reducer({}, {type: 'UPDATE_MEETING_FULFILLED', payload:'meeting'})).toEqual({updating: false, updated: true, meeting: 'meeting'});
    });
    it('should handle UPDATE_MEETING_ERROR', ()=>{
        expect(reducer({}, {type: 'UPDATE_MEETING_ERROR', payload: 'this is error'})).toEqual({updating: false, updated: false, errors: 'this is error'});
    });

    it('should handle DELETE_MEETING_STARTED', ()=>{
        expect(reducer({}, {type: 'DELETE_MEETING_STARTED'})).toEqual({deleting: true});
    });
    it('should handle DELETE_MEETING_FULFILLED', ()=>{
        expect(reducer({}, {type: 'DELETE_MEETING_FULFILLED', payload:'meeting'})).toEqual({deleting: false, deleted: true, meeting: 'meeting'});
    });
    it('should handle DELETE_MEETING_ERROR', ()=>{
        expect(reducer({}, {type: 'DELETE_MEETING_ERROR', payload: 'this is error'})).toEqual({deleting: false, deleted: false, errors: 'this is error'});
    });
});