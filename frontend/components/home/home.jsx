import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
     this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
  }

  render() {
    let channelsindex = Object.values(this.props.channels).map((channel, i) => {
      return <li key={i}>{channel.title}</li>;
    });

    return(
      <div>
        <h1>Welcome home {this.props.currentUser.username}</h1>
        <button onClick={this.handleLogout}>Logout</button>

        <ul>{channelsindex}</ul>
      </div>
    );
  }
}

export default Home;
