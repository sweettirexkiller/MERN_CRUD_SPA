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

export function fetchMeeting(id){
    return function(dispatch){
        axios.get(`/api/meeting/${id}`)
            .then(res => {
                dispatch({type: 'MEETING_FETCHED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'MEETING_FETCHED_ERROR', payload: err})
            });
    }
}
export function updateMeeting(meeting){
    return function(dispatch){
        axios.put(`/api/meeting/${this.state.meeting._id}`, meeting)
            .then((res) =>  {
                dispatch({type: 'MEETING_UPDATE_COMPLETE', payload: true})
            })
            .catch((err) => {
                dispatch({type: 'MEETING_UPDATE_ERROR', payload: err})
            });


    }
}