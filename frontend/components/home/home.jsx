import React from 'react';

class Home extends React.Component {

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
    return(
      <div>
        <h1>Welcome home {this.props.currentUser.username}</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;
