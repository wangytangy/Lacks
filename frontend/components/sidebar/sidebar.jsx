import React from 'react';
import { Link } from 'react-router';
import ChannelIndexContainer from '../channels/channel_index_container';
import DirectMessagesContainer from '../direct_messages/direct_messages_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // this.mapChannelIndex = this.mapChannelIndex.bind(this);
    this.dropdownOpen = this.dropdownOpen.bind(this);

    this.state = { dropdown: "dropdown-menu" };
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
            <i className="material-icons circle" id="circle">brightness_1</i>
            {this.props.currentUser.username}
          </span>
        </div>

        <nav className={this.state.dropdown}>
          <ul className="profile-options">
            <li className="profile-options-username"><strong>{this.props.currentUser.username}</strong></li>
            <li className="profile-options-handle">@{this.props.currentUser.username}</li>
            <li className="logout"><a onClick={this.handleLogout}>Sign out of Lacks</a></li>
          </ul>
          <div className="popover-mask" onClick={this.dropdownOpen}></div>
        </nav>

        <ChannelIndexContainer />
        <DirectMessagesContainer />

      </div>
    );
  }
}

export default Sidebar;
