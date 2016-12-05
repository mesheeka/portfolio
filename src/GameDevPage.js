import React, {Component} from 'react';

import {Link} from 'react-router';

class GameDevPage extends Component {

	render() {
		return (
			<div>
				<p>I love video games! I make some!</p>
				<div>
					<p>{'"Fox, Chief, Hunter" is a role playing game where you chose to battle as a super-natural fox, the tribe Chief, or the Hunter'}</p>
					<Link to='/roshambo'>Play Fox, Chief, Hunter</Link>
				</div>
			</div>
		);
	}
}
export default GameDevPage;