import React, {Component} from 'react';
import WeatherIcon from './WeatherIcon.js';
import DarkskyLogo from './DarkskyLogo.png';
import './style/Weather.css';

class Weather extends Component {
	
	render() {
		return (
			<div className='weather'>
				<h3>The weather in</h3>
				<h1>{this.props.weatherData.city}</h1>
				<WeatherIcon icon={this.props.weatherData.icon}/>
				<h2>{this.props.weatherData.summary}</h2>
				<h1>{this.props.weatherData.temp}&deg;F</h1>
				<a href='https://darksky.net/poweredby/'><img src={DarkskyLogo} alt='Darksky logo' height='50'></img></a>
			</div>
		);
	}
}

export default Weather;