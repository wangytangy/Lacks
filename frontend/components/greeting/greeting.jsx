import React from 'react';
import { Link } from 'react-router';
import SessionForm from '../sessions/sessions_form';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
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
      <div className="splash group">
        <div className="bg">

        </div>
        <h1 className="header-title">
          A messaging app for teams who like not working
        </h1>

        <button className="signin-corner">
          <Link to="login">Sign in</Link>
        </button>

        <button className="signup-button">
          <Link to="signup">Sign up for free</Link>
        </button>
      </div>

      );
    }
  }

}

export default Greeting;
