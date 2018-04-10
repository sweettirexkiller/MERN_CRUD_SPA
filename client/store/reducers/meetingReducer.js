export default function reducer(state = {meetings: [], error: {}}, action) {
    switch (action.type) {
        case 'MEETINGS_FETCHED': {
            return {...state, meetings: action.payload}
        }
        case 'MEETINGS_FETCHED_ERROR': {

        }
        default: {
            return state
        }
    }
}