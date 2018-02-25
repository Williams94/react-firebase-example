import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="HeaderTitle">Beezer React + Firebase test</h1>
        <h2 className="HeaderSubtitle">Created By: &nbsp;
          <span className="HeaderUsername">Ross Williams</span>
        </h2>
      </header>
    );
  }
}

export default Header;