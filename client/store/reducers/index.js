import { combineReducers } from 'redux'

import meeting from './meetingReducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    meeting,
    router:routerReducer
});