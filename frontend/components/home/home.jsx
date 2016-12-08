import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

//renders SidebarContainer
//renders ChannelsContainer/Direct MessagesContainer

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SidebarContainer />
      </div>
    );
  }
}

export default Home;
