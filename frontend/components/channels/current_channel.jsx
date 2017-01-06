/* globals Pusher */
import React from 'react';
import ChannelHeaderContainer from './channel_header_container';
import MessageIndexContainer from '../messages/message_index_container';
import MessageFormContainer from '../messages/message_form_container';
import PopoutContainer from '../popout/popout_container';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
    this.boundFetchMessages = this.boundFetchMessages.bind(this);
    this.boundFetchDirectMessages = this.boundFetchDirectMessages.bind(this);
    this.handleLeaveChannel = this.handleLeaveChannel.bind(this);
  }

  boundFetchMessages() {
    this.props.fetchMessages(this.props.params.id);
  }

  boundFetchDirectMessages() {
    this.props.fetchDirectMessages();
  }

  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetchAChannel(this.props.params.id);
    }


    this.pusher = new Pusher('6229f47cce1a7e390f4e', {
      encrypted: true
    });


    var channel = this.pusher.subscribe('channel');
    channel.bind('message_published', (data) => {

      this.boundFetchMessages();
      this.boundFetchDirectMessages();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.fetchAChannel(nextProps.params.id);
    }
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('channel');
  }

  handleLeaveChannel(channelID) {
    this.props.leaveChannel(channelID);
    this.props.fetchDirectMessages();
    let firstChannelID = Object.keys(this.props.channels)[0];
    this.props.router.replace(`messages/${firstChannelID}`);
  }

  render() {
    // debugger
    console.log(this.props);
    // let children;
    // if (this.props.location.pathname.indexOf("popout") !== -1) {
    //   children = <PopoutContainer />;
    // }

    return(
      <div className="current-channel">
        <div id="current-channel-main">
          <ChannelHeaderContainer leaveChannel={this.handleLeaveChannel}/>
          <MessageIndexContainer />
          <MessageFormContainer />
        </div>

        { this.props.children }
      </div>
    );
  }
}

export default CurrentChannel;
