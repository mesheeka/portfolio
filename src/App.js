import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './style/App.css';

class App extends Component {
  render() {
  	
    return (
      <div className='app'>
        <Header />
        <div className='content'>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
