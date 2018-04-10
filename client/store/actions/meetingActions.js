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