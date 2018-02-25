import React, {Component} from 'react';
import './AppsListItem.css';

class UserList extends Component {
  render() {
    return (
      <div className="AppListItem">
        <li>{this.props.app.title}</li>
      </div>
    );
  }
}

export default UserList;
