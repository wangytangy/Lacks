import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li><Link to="signup">Sign Up</Link></li>
            <li><Link to="login">Log In</Link></li>
          </ul>
        </div>
      );
    }
  }
}

export default Greeting;
