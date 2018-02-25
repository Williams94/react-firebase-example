import React, {Component} from 'react';
import './AppsList.css';
import AppsListItem from '../AppsListItem/AppsListItem';

class AppsList extends Component {
  constructor() {
    super();
    this.state = {
      appListItems: null,
    }
  }

  componentDidMount() {
    if (this.state.appListItems === null) {
      const obj = this.props.apps;
      console.log(obj);
      const array = Object.keys(obj).map(function (key) {
        obj[key].id = key;
        return <AppsListItem key={key} app={obj[key]}/>;
      });
      this.setState({userListItems: array});
    }
  }

  render() {
    return (
      <div className="AppsList">
        {/*Account ID: <span className="AccountId">{this.props}</span>*/}
        Apps:<ul>{this.state.userListItems}</ul>
      </div>
    );
  }
}

export default AppsList;
