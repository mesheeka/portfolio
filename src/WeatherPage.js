import React, { Component } from 'react';
import Weather from './Weather.js';
import fetchJsonp from '../node_modules/fetch-jsonp/build/fetch-jsonp.js';

class WeatherPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let key = '23fc19243ee40ba80cb288832a838160';
		let lat = '34.4291785';
		let lon = '-119.77912140000001';
		let url = `https://api.darksky.net/forecast/${key}/${lat},${lon}?exclude=[minutely,hourly,daily,flags]`;
		fetchJsonp(url).then(data => data.json())
				  .then(weatherData => this.setState({dump:weatherData,
				  									  temp:weatherData.currently.temperature,
				  									  summary:weatherData.currently.summary,
				  									  icon:weatherData.currently.icon,
				  									  city:'Goleta'
				  									  }));
			
		
	}
	render() {
		return (
			<div>
				<h1>Weather app</h1>
				<p>I made a weather app on codepen.io. The javascript is all jquery and the html is div city! This was one of the first 'intense' projects I did while learning on freecodecamp.com. <a href='http://codepen.io/mesheeka/pen/VaNarX?editors=0010'>Here</a> is my original weather app.</p>
				<p>I made a react version of the weather app!</p> 
				<Weather weatherData={this.state}/>				
			</div>
		);
	}
}

export default WeatherPage;