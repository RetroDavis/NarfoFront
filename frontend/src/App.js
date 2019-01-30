
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios'
import { Route, Link } from 'react-router-dom';
import myWorker from './test.worker';

class App extends Component {

  constructor () {
    super()
    this.state = {
      username: 'will be changed with name from Github API'
    }

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const worker = new myWorker();
    worker.postMessage(this.state.counter);
    worker.addEventListener('message', event => this.setState({counter: event.data}));
}
  handleClick () {
    axios.get('https://api.github.com/users/MasulukeI')
      .then(response => this.setState({username: response.data.name}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Test api</button>
        <p>{this.state.username}</p>
      </div>
    )
}
}

export default App;