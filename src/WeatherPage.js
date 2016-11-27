import React, { Component } from 'react';
import Weather from './Weather.js';
import fetchJsonp from '../node_modules/fetch-jsonp/build/fetch-jsonp.js';

class WeatherPage extends Component {
	constructor(props) {
		super(props);
		this.state = {show:false};


	}


	componentDidMount() {
		const weatherKey = '23fc19243ee40ba80cb288832a838160';
		const googlKey = 'AIzaSyAZyn5mI9rxSORSnIVzzIIV_7nsBNqd-90';
		let getGeo = new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(function(position){
				resolve({lat:position.coords.latitude,
						 lon:position.coords.longitude});
			});
		});
		getGeo.then(function(coord){
			//TODO: get city from coords, try google api
			let url = `https://api.darksky.net/forecast/${weatherKey}/${coord.lat},${coord.lon}?exclude=[minutely,hourly,daily,flags]`;
			return url;
		}).then((url) =>
			fetchJsonp(url).then(data => data.json())
				   	  	   .then(weatherData => this.setState({temp:weatherData.currently.temperature,
				  									 	   summary:weatherData.currently.summary,
				  									 	   icon:weatherData.currently.icon,
				  								           show:true,
				  									       }))
		)
	}



	render() {		
		return (
			<div>
				<h1>Weather app</h1>
				<p>I made a weather app on codepen.io. The javascript is all jquery and the html is div city! This was one of the first 'intense' projects I did while learning on freecodecamp.com. <a href='http://codepen.io/mesheeka/pen/VaNarX?editors=0010'>Here</a> is my original weather app.</p>
				<p>I made a react version of the weather app!</p> 
				{this.state.show ? <Weather weatherData={this.state}/> : <p>trying to get weather</p>}			
			</div>
		);
	}
}

export default WeatherPage;





