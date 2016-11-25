import React, {Component} from 'react';

class Weather extends Component {
	
	render() {
		return (
			<div>
				<h3>The weather in</h3>
				<h1>{this.props.weatherData.city}</h1>
				<span><img src={this.props.weatherData.icon} alt={this.props.weatherData.weather} /></span>
				<p>{this.props.weatherData.weather}</p>
				<h1>{this.props.weatherData.temp}&deg;F</h1>
			</div>
		);
	}
}

export default Weather;