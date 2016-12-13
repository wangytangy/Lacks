import React from 'react';
import MessageFormContainer from './message_form_container';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.mapMessages = this.mapMessages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentChannel.id !== nextProps.currentChannel.id) {
      this.props.fetchMessages(nextProps.currentChannel.id);
    }
  }

  mapMessages() {
    let messagesArr = [];

    this.props.messages.forEach((message, i) => {
      messagesArr.push(<li key={i}>{message.body}</li>);
    });
    return messagesArr;
  }

  render() {
    let messageItems = this.mapMessages();
    return(
      <div className="message-feed">
        <div>
          <h1>Message Feed</h1>
        </div>
        <ul>
          {messageItems}
        </ul>
        <MessageFormContainer />
      </div>
    );
  }





}

export default MessageIndex;
