import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import CurrentChannelContainer from '../channels/current_channel_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-container group">
        <SidebarContainer />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
