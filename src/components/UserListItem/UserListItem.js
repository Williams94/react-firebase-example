import React, {Component} from 'react';
import './UserListItem.css';
import AppsList from '../AppsList/AppsList';

class UserList extends Component {
  render() {
    return (
      <div className="UserListItem">
        <li>
          <span className="Name">{this.props.user.name}</span>
          <br/>
          Account:&nbsp;<span className="Account">{this.props.user.account}</span>
          <AppsList apps={this.props.user.apps}/>
        </li>
        <hr/>
      </div>
    );
  }
}

export default UserList;
