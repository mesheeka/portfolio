import React, {Component} from 'react';
import WeatherIcon from './WeatherIcon.js';

class Weather extends Component {
	
	render() {
		return (
			<div>
				<h3>The weather is</h3>
				<h1>{this.props.weatherData.city}</h1>
				<WeatherIcon icon={this.props.weatherData.icon}/>
				<p>{this.props.weatherData.summary}</p>
				<h1>{this.props.weatherData.temp}&deg;F</h1>
			</div>
		);
	}
}

export default Weather;