import React, {Component} from 'react';
import {Skycons} from '../public/skycons.js';

class Weather extends Component {
	
	render() {
		let icons = new Skycons({"color": "orange"});
		icons.add("icon", this.props.weatherData.icon);
		return (
			<div>
				<h3>The weather in</h3>
				<h1>{this.props.weatherData.city}</h1>
				<span><canvas id="icon" width="64" height="64"></canvas></span>
				<p>{this.props.weatherData.summary}</p>
				<h1>{this.props.weatherData.temp}&deg;F</h1>
			</div>
		);
	}
}

export default Weather;