import React, {Component} from 'react';
import './UserList.css';
import UserListItem from '../UserListItem/UserListItem';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      userListItems: 'Loading...',
    }
  }

  componentDidUpdate() {
    if (this.state.userListItems === 'Loading...') {
      const obj = JSON.parse(this.props.users);
      console.log(obj);
      const array = Object.keys(obj).map((key) => {
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
