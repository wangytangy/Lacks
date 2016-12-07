import React from 'react';
import { Link } from 'react-router';



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
      <div className="greeting group">

        <figure className="logo"><Link to="/">Lacks</Link></figure>

        <button className="signin-corner">
          <Link to="login">Sign in</Link>
        </button>

      </div>

      );
    }
  }

}

export default Greeting;
