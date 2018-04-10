import axios from "axios/index";

export function fetchMeetings(){
    return function(dispatch){
        axios.get('/api/meeting')
            .then(res => {
                dispatch({type: 'MEETINGS_FETCHED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'MEETINGS_FETCHED_ERRORS', payload: err})
            });
    }
}

export function addMeeting(meeting){
    return function(dispatch){
        axios.post('/api/meeting', meeting)
            .then((res) => {
                dispatch({type: 'MEETING_ADDED', payload: true})
            })
            .catch((err) => {
                dispatch({type: 'MEETING_ADDED_ERROR', payload: err.response.data.errors})
            });
    }
}