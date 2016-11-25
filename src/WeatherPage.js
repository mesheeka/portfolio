import React, { Component } from 'react';
import Weather from './Weather.js';

class WeatherPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat=34.4291785&lon=-119.77912140000001&APPID=d16348db256c190293c8ae15fd7c859a&units=imperial';
		fetch(url).then(data => data.json())
				  .then(weatherData => this.setState({city:weatherData.name,
													  icon:`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
													  temp:weatherData.main.temp,
													  weather:weatherData.weather[0].description}));
		
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