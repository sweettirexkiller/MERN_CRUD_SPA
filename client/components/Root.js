import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'

import 'semantic-ui-css/semantic.min.css';
import '../styles/index.scss';

import App from './meeting/App';
import Edit from './meeting/Edit';
import Create from './meeting/Create';
import Show from './meeting/Show';
import {Provider} from 'react-redux';
import store from './../store/store.js';
import history from './../store/history';

class Root extends Component {
    render(){
        return (
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
        )
    }
}

export default Root;