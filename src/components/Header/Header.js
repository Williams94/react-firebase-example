import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Beezer React + Firebase test</h1>
        <h2 className="App-subtitle">Created By: <span className="App-username">Ross Williams</span></h2>
      </header>
    );
  }
}

export default Header;