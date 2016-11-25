import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App.js';
import WeatherPage from './WeatherPage.js';
import Calculator from './Calculator';


ReactDOM.render((

	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/weather' component={WeatherPage} />
			<Route path='/calculator' component={Calculator} />
		</Route>
	</Router>

), document.getElementById('root')
);
