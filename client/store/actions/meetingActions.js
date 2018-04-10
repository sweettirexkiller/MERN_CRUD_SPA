import axios from "axios/index";

export function fetchMeetings(){
    return function(dispatch){
        dispatch({type: 'FETCH_MEETINGS_STARTED'});
        axios.get('/api/meeting')
            .then(res => {
                dispatch({type: 'FETCH_MEETINGS_FULFILLED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_MEETINGS_ERROR', payload: err})
            });
    }
}

export function addMeeting(meeting){
    return function(dispatch){
        dispatch({type: 'ADD_MEETING_STARTED'});
        axios.post('/api/meeting', meeting)
            .then((res) => {
                dispatch({type: 'ADD_MEETING_FULFILLED'})
            })
            .catch((err) => {
                dispatch({type: 'ADD_MEETING_ERROR', payload: err.response.data.errors})
            });
    }
}

export function fetchMeeting(id){
    return function(dispatch){
        dispatch({type: 'FETCH_MEETING_STARTED'});
        axios.get(`/api/meeting/${id}`)
            .then(res => {
                dispatch({type: 'FETCH_MEETING_FULFILLED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_MEETING_ERROR', payload: err})
            });
    }
}
export function updateMeeting(meeting){
    return function(dispatch){
        dispatch({type: 'UPDATE_MEETING_STARTED'});

        axios.put(`/api/meeting/${meeting._id}`, meeting)
            .then((res) =>  {
                dispatch({type: 'UPDATE_MEETING_FULFILLED'})
            })
            .catch((err) => {
                dispatch({type: 'UPDATE_MEETING_ERROR', payload: err})
            });


    }
}