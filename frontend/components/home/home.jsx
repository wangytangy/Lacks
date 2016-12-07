import React from 'react';

class Home extends React.Component {

  render() {
    return(
      <div>
        <h1>Welcome home {this.props.currentUser.username}</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
