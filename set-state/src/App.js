import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is state text',
      cat: 5
    }
  }
  update(event) {
    this.setState({
      txt: event.target.value
    });
  }
  render() {
    return <div>
      <input type="text" onChange={this.update.bind(this)}/>
      <h1>{this.state.txt} - {this.state.cat}</h1>
    </div>
  }
}

export default App;
