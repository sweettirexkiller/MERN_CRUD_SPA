import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';

import App from './components/App';
import Edit from './components/meeting/Edit';
import Create from './components/meeting/Create';
import Show from './components/meeting/Show';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/create' component={Create}/>
            <Route path='/show/:id' component={Show}/>
        </div>
    </Router>
    , document.getElementById('root')
);