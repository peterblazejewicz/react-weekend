import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Hello React!"
}

export default App;
