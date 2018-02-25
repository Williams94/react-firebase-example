import React, {Component} from 'react';
import './UserList.css';
import AppsList from '../AppsList/AppsList';

class UserList extends Component {
  render() {
    return (
      <div className="AppListItem">
        <span>{this.props.app.title}</span>
      </div>
    );
  }
}

export default UserList;
