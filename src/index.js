import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';



$('body').append('<div id="AppWrap"></div>');

ReactDOM.render(
	<App/>,
	document.getElementById('AppWrap')
)




