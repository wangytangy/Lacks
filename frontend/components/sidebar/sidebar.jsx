import React from 'react';
import { Link } from 'react-router';
import ChannelIndexContainer from '../channels/channel_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // this.mapChannelIndex = this.mapChannelIndex.bind(this);
    this.dropdownOpen = this.dropdownOpen.bind(this);
    this.state = { dropdown: "dropdown-menu"};
  }

  // componentDidMount() {
  //   this.props.fetchAllChannels();
  // }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
  }

  //probably will move this to a ChannelsIndex Component
  // mapChannelIndex() {
  //   let channelsIndex = [];
  //   if (this.props.channels) {
  //     channelsIndex = Object.values(this.props.channels).map((channel, i) => {
  //       return <li key={i}>{channel.title}</li>;
  //     });
  //     return channelsIndex;
  //   } else {
  //     return channelsIndex;
  //   }
  // }

  dropdownOpen() {
    if (this.state.dropdown === "dropdown-menu") {
      this.setState({dropdown: "dropdown-menu-open"});
    } else {
      this.setState({dropdown: "dropdown-menu"});
    }
  }

  render() {
    // let channelsIndex = this.mapChannelIndex();

    return(
      <div className="sidebar">
        <div className="team-menu group" onClick={this.dropdownOpen}>

          <i className="material-icons bell">notifications_none</i>
          <h1 className="sidebar-header">
            Lacks
            <i className="material-icons arrow">keyboard_arrow_down</i>
          </h1>


          <span className="sidebar-header-username">
            <i className="material-icons circle">panorama_fish_eye</i>
            {this.props.currentUser.username}
          </span>

          <nav className={this.state.dropdown}>
            <ul className="profile-options">
              <li className="profile-options-username"><strong>{this.props.currentUser.username}</strong></li>
              <li className="profile-options-handle">@{this.props.currentUser.username}</li>
              <li className="logout"><a onClick={this.handleLogout}>Sign out of Lacks</a></li>
            </ul>
          </nav>
        </div>

        <ChannelIndexContainer />

        <h2>Direct Messages Container</h2>

      </div>
    );
  }
}

export default Sidebar;
