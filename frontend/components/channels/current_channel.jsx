/* globals Pusher */
import React from 'react';
import ChannelHeaderContainer from './channel_header_container';
import MessageIndexContainer from '../messages/message_index_container';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
    this.boundFetchMessages = this.boundFetchMessages.bind(this);
  }

  boundFetchMessages() {
    // debugger
    this.props.fetchMessages(this.props.params.id);
  }

  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetchAChannel(this.props.params.id);
    }
    //componentDidMount() is invoked immediately after a component is mounted.
    // Initialization that requires DOM nodes should go here.
    // If you need to load data from a remote endpoint,
    //this is a good place to instantiate the network request
  }


  componentWillReceiveProps(nextProps) {

    //fetch next channel if params change
    if (nextProps.params.id !== this.props.params.id) {
      this.props.fetchAChannel(nextProps.params.id);
    }

    this.pusher = new Pusher('6229f47cce1a7e390f4e', {
      encrypted: true
    });
    var channel = this.pusher.subscribe('channel_' + this.props.params.id);
    channel.bind('message_published', (data) => {
      this.boundFetchMessages();
    });
    // componentWillReceiveProps() is invoked before
    // a mounted component receives new props.
    // If you need to update the state in response to prop changes
    // (for example, to reset it),
    // you may compare this.props and nextProps
    // and perform state transitions using this.setState() in this method.
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('channel_' + this.props.params.id);
  }

  render() {
    return(
      <div className="current-channel">
        <ChannelHeaderContainer />
        <MessageIndexContainer />
      </div>
    );
  }
}

export default CurrentChannel;
