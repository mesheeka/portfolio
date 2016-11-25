import React, {Component} from 'react';
import Header from './Header.js';

class App extends Component {
  render() {
    let appStyle = {display:'flex',
                    flexDirection:'column'};
    return (
      <div style={appStyle}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
