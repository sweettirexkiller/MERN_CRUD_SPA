export default function reducer(state = {meetings: [], errors: {}, meetingAdded: false, meeting: {}, meetingUpdated: false}, action) {
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
        case 'MEETING_FETCHED': {
            return {...state, meeting: action.payload}
        }
        case 'MEETING_FETCHED_ERROR': {
            return {...state, errors: action.payload}
        }
        case 'MEETING_UPDATE_COMPLETE': {
            return {...state, meetingUpdated: action.payload}
        }
        case 'MEETING_UPDATE_ERROR': {
            return {...state, errors: action.payload}
        }
        default: {
            return state
        }
    }
}