export default function reducer(state = {meetings: [], error: {}}, action) {
    switch (action.type) {
        case 'MEETINGS_FETCHED': {
            return {...state, meetings: action.payload}
        }
        case 'MEETINGS_FETCHED_ERROR': {
            return {...state, error: action.payload}
        }
        default: {
            return state
        }
    }
}