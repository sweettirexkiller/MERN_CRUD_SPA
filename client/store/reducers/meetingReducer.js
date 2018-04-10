export default function reducer(state = {meetings: [], errors: {}, meetingAdded: false}, action) {
    switch (action.type) {
        case 'MEETINGS_FETCHED': {
            return {...state, meetings: action.payload}
        }
        case 'MEETINGS_FETCHED_ERROR': {
            return {...state, errors: action.payload}
        }
        case 'MEETING_ADDED': {
            return {...state, meetingAdded: action.payload}
        }
        case 'MEETING_ADDED_ERROR': {
            return {...state, errors: action.payload}
        }
        default: {
            return state
        }
    }
}