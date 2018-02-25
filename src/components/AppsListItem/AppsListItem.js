import React, {Component} from 'react';
import './AppsListItem.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {rating: this.props.app.rating};

    this.handleChange = this.handleChange.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  handleChange(event) {
    this.setState({rating: event.target.value});
  }

  updateRating(e) {
    e.preventDefault();
    console.log('Saving rating', this.state.rating);
  }

  render() {
    return (
      <div className="AppListItem">
        <li>
          {this.props.app.title}
          <br/>
          <span className="RatingText">Rated:</span>
          <input value={this.state.rating} onChange={this.handleChange}
                 type="number" placeholder="Rate this title (1-5)" min="1" max="5" step="1"/>
          <span className="Star">⭐</span>
          <button onClick={this.updateRating}>Save Rating</button>
        </li>
      </div>
    );
  }
}

export default UserList;
