import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App.js';
import WeatherPage from './WeatherPage.js';
import GameDevPage from './GameDevPage';
import Home from './Home.js';
import Roshambo from './Roshambo.js';


ReactDOM.render((

	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/home' component={Home} />
			<Route path='/weather' component={WeatherPage} />
			<Route path='/games' component={GameDevPage} />
			<Route path='/roshambo' component={Roshambo} />
		</Route>
	</Router>

), document.getElementById('root')
);
