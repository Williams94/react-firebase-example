import React, {Component} from 'react';
import './UserList.css';
import UserListItem from '../UserListItem/UserListItem';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      userListItems: 'loading...',
    }
  }

  componentDidUpdate() {
    if (this.state.userListItems === 'loading...') {
      const obj = JSON.parse(this.props.users);
      console.log(obj);
      const array = Object.keys(obj).map(function (key) {
        obj[key].id = key;
        return <UserListItem key={key} user={obj[key]}/>;
      });
      this.setState({userListItems: array});
    }
  }

  render() {
    return (
      <div className="UserList">
        <ul>{this.state.userListItems}</ul>
      </div>
    );
  }
}

export default UserList;
