export default function reducer(state = {
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
}, action) {
    switch (action.type) {

        /*INDEX*/
        case 'FETCH_MEETINGS_STARTED': {
            return {...state, fetching: true}
        }
        case 'FETCH_MEETINGS_FULFILLED': {
            return {...state, meetings: action.payload, fetching: false, fetched: true}
        }
        case 'FETCH_MEETINGS_ERROR': {
            return {...state, errors: action.payload, fetching: false, fetched: false}
        }

        /*STORE*/
        case 'ADD_MEETING_STARTED': {
            return {...state, adding: true}
        }
        case 'ADD_MEETING_FULFILLED': {
            return {...state, meeting: action.payload, added: true, adding: false}
        }
        case 'MEETING_ADDED_ERROR': {
            return {...state, errors: action.payload, added: false, adding: false}
        }

        /*SHOW*/
        case 'FETCH_MEETING_STARTED': {
            return {...state, fetching: true}
        }

        case 'FETCH_MEETING_FULFILLED': {
            return {...state, meeting: action.payload, fetching: false, fetched: true}
        }

        case 'FETCH_MEETING_ERROR': {
            return {...state, errors: action.payload, fetching: false, fetched: false}
        }

        /*UPDATE*/
        case 'UPDATE_MEETING_STARTED': {
            return {...state, updating: true}
        }
        case 'UPDATE_MEETING_FULFILLED': {
            return {...state, meeting: action.payload, updating: false, updated: true}
        }
        case 'UPDATE_MEETING_ERROR': {
            return {...state, errors: action.payload, updating: false, updated: false}
        }

        /*DESTROY*/
        case 'DELETE_MEETING_STARTED': {
            return {...state, deleting: true}
        }
        case 'DELETE_MEETING_FULFILLED': {
            return {...state, meeting: action.payload, deleting: false, deleted: true}
        }
        case 'DELETE_MEETING_ERROR': {
            return {...state, errors: action.payload, deleting: false, deleted: false}
        }

        default: {
            return state
        }
    }
}