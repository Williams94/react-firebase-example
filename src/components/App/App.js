import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';

class App extends Component {
  componentWillMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <UserList users={this.props.users}/>
      </div>
    );
  }
}

export default App;
