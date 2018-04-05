import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

window.$ = window.jQuery = require('jquery'); // required for bootstrap
window.Popper = require('popper.js'); // required for tooltip, popup...

ReactDOM.render(<App />, document.getElementById('root'));