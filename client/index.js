import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'

import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';

import App from './components/App';
import Edit from './components/meeting/Edit';
import Create from './components/meeting/Create';
import Show from './components/meeting/Show';
import {Provider} from 'react-redux';
import store from './store/store.js';
import history from './store/history';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/edit/:id' component={Edit}/>
                <Route path='/create' component={Create}/>
                <Route path='/show/:id' component={Show}/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);