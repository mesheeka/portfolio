import React, {Component} from 'react';
import {Link} from 'react-router';


class Header extends Component {
	render() {
		let headerStyle={display:'flex'};
		return(
			<div style={headerStyle}>
				<h1>Adrian's Portfolio</h1>
	            <ul role='navigation'>
	            	<li><Link to='/'>Portfolio</Link></li>
	            	<li><Link to='/weather'>Weather app</Link></li>
	            </ul>
            </div>
		);
	}
}

export default Header;