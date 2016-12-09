import React, {Component} from 'react';
import {Link} from 'react-router';


class Header extends Component {
	render() {
		return(
			<div>
				<h1>Adrian's Portfolio</h1>
	            <ul role='navigation'>
	            	<li><Link to='/' onlyActiveOnIndex={true}>Home</Link></li>
	            	<li><Link to='/weather'>Weather app</Link></li>
	            	<li><Link to='/games'>Game Development</Link></li>
	            </ul>
            </div>
		);
	}
}

export default Header;