import React, {Component} from 'react';
import './AppsList.css';
import AppsListItem from '../AppsListItem/AppsListItem';

class AppsList extends Component {
  render() {
    return (
      <div className="AppsList">
        <AppsListItem app={app}/>
      </div>
    );
  }
}

export default AppsList;
