import React, {Component} from 'react';
import {Skycons} from '../public/skycons.js';


class WeatherIcon extends Component {
	componentDidMount() {
		let icons = new Skycons({"color": "orange"});
		icons.add('icon', this.props.icon);
		icons.play();
	}
	render() {
		return (
			<span><canvas id='icon' width="64" height="64"></canvas></span>
		);
	}
}

export default WeatherIcon;