import { applyMiddleware, createStore} from 'redux'
import {routerMiddleware } from 'react-router-redux';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers';
import history from './history';

const historyMiddleWare = routerMiddleware(history);
const middleware = applyMiddleware(promise(), thunk, createLogger(),historyMiddleWare);

export default createStore(reducer, middleware);