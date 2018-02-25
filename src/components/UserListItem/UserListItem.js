import React, {Component} from 'react';
import './UserListItem.css';
// import AppsList from '../AppsList/AppsList';

class UserList extends Component {
  render() {
    return (
      <div className="UserListItem">
        <li>{this.props.user.name}</li>
        {/*<AppsList apps={this.props.user.apps}/>*/}
      </div>
    );
  }
}

export default UserList;
