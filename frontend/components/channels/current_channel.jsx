/* globals Pusher */
import React from 'react';
import ChannelHeaderContainer from './channel_header_container';
import MessageIndexContainer from '../messages/message_index_container';
import MessageFormContainer from '../messages/message_form_container';

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
    //componentDidMount() is invoked immediately after a component is mounted.
    // Initialization that requires DOM nodes should go here.
    // If you need to load data from a remote endpoint,
    //this is a good place to instantiate the network request


    this.pusher = new Pusher('6229f47cce1a7e390f4e', {
      encrypted: true
    });
    // console.log("this.pusher: " + this.pusher);

    var channel = this.pusher.subscribe('channel');
    channel.bind('message_published', (data) => {
      //use data to perform actions using @message
      this.boundFetchMessages();
      this.boundFetchDirectMessages();
    });
  }

  componentWillReceiveProps(nextProps) {

    //fetch next channel if params change
    if (nextProps.params.id !== this.props.params.id) {
      this.props.fetchAChannel(nextProps.params.id);
    }

    // componentWillReceiveProps() is invoked before
    // a mounted component receives new props.
    // If you need to update the state in response to prop changes
    // (for example, to reset it),
    // you may compare this.props and nextProps
    // and perform state transitions using this.setState() in this method.
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('channel');
  }
  // creator={this.props.currentChannel.creator.username}
  // memberCount={this.props.currentChannel.members.length}

  handleLeaveChannel(channelID) {
    this.props.leaveChannel(channelID);
    this.props.fetchDirectMessages();
    //redirect to last available channel
    let firstChannelID = Object.keys(this.props.channels)[0];
    this.props.router.replace(`messages/${firstChannelID}`);
  }

//

  render() {
    return(
      <div className="current-channel">
        <ChannelHeaderContainer leaveChannel={this.handleLeaveChannel}/>
        <MessageIndexContainer />
        <MessageFormContainer />
      </div>
    );
  }
}

export default CurrentChannel;
