import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'Hello World!'
    }
  }
  update(event) {
    this.setState({
      txt: event.target.value
    });
  }
  render() {
    return <div>
      <h1>{this.state.txt}</h1>
      <Widget update={this.update.bind(this)}/><br />
      <Widget update={this.update.bind(this)}/><br />
      <Widget update={this.update.bind(this)}/>
    </div>
  }
}

const Widget = (props) => <input type="text" onChange={props.update}/>


export default App;
