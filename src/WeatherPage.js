import React, { Component } from 'react';
import Weather from './Weather.js';
import fetchJsonp from 'fetch-jsonp';

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
		
			})
		})
		
		
		getGeo.then(function(coord){
			//TODO: get city from coords, try google api
			let url = `https://api.darksky.net/forecast/${weatherKey}/${coord.lat},${coord.lon}?exclude=[minutely,hourly,daily,flags]`;
			return url;
		}).then((url) =>
			fetchJsonp(url).then(data => data.json())
				   	  	   .then(weatherData => this.setState({temp:weatherData.currently.temperature,
				  									 	   summary:weatherData.currently.summary,
				  									 	   icon:weatherData.currently.icon,
				  								           lat:weatherData.latitude,
				  								           lon:weatherData.longitude
				  									       }))).then(() => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lon}&key=${googlKey}`).then(data => data.json()).then(cityData => this.setState({city:cityData.results[1].formatted_address,
				  									       																																																   show:true}))
																)
		
	}



	render() {		
		return (
			<div>
				{this.state.show ? <Weather weatherData={this.state}/> : <p>...trying to get weather</p>}			
			</div>
		);
	}
}

export default WeatherPage;





