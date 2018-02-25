import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  componentWillMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ul>{this.props.results !== null ? this.props.results : '..loading'}</ul>
        {console.log(this.props.results)}
      </div>
    );
  }
}

export default App;
