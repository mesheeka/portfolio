import React, {Component} from 'react';

class Footer extends Component {
	render() {
		let footerStyle = {position:'absolute',
						   bottom:'0',
						   width:'100%',
						   padding:'4px',
						   background:'gray'};
		return (
			<p style={footerStyle}>MesheekaTlaloc-MassArtFlow-Music=Life</p>
		);
	}
}

export default Footer;