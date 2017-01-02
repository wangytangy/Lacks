import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.replace("/");
    }
  }

  guestLogin() {
    let user = {username: "guest", email: "guest@gmail.com", password: "guestpassword"};
    this.props.login(user).then((user) => {
      window.currentUser = user;
      this.props.router.replace("messages");
    });
  }

  render() {
    return (
    <div className="greeting group">

      <figure className="logo">
        <Link to="/">Lacks</Link>
      </figure>

      <button className="signin-corner">
        <Link to="login">Sign in</Link>
      </button>

      <button className="guest-signup" onClick={this.guestLogin}>
        Guest Signup
      </button>

    </div>
    );
  }

}

export default Greeting;
