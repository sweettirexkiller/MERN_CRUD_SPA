import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/index.scss';
import App from './components/App';
import Edit from './components/meeting/Edit';
import Create from './components/meeting/Create';
import Show from './components/meeting/Show';

window.$ = window.jQuery = require('jquery'); // required for bootstrap
window.Popper = require('popper.js'); // required for tooltip, popup...

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