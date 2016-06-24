import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import './common.css'
import './fontSize.jsx'


$('body').append('<div id="AppWrap"></div>');
$('head').append('<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">');

ReactDOM.render(
	<App/>,
	document.getElementById('AppWrap')
)




