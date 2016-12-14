import React, {Component} from 'react';
import {Link} from 'react-router';
import './style/Header.css';


class Header extends Component {
	render() {
		return(
			<header className='header'>
				<h1 className='title'>Adrian's Portfolio</h1>
	            <ul role='navigation' >
	            	<li className='listItem'><Link to='/' onlyActiveOnIndex={true}>Home</Link></li>
	            	<li className='listItem'><Link to='/weather'>Weather app</Link></li>
	            	<li className='listItem'><Link to='/games'>Game development</Link></li>
	            </ul>
            </header>
		);
	}
}

export default Header;