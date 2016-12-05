import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    let appStyle = {display:'flex',
                    flexDirection:'column',
                    backgroundColor:'white',
                    };
    return (
      <div style={appStyle}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
