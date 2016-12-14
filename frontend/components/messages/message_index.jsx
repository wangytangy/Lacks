import React from 'react';
import MessageFormContainer from './message_form_container';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.mapMessages = this.mapMessages.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentChannel.id !== nextProps.currentChannel.id) {
      this.props.fetchMessages(nextProps.currentChannel.id);
    }
  }

  componentDidUpdate() {
    this.updateScroll();
  }

  updateScroll() {
    let element = document.getElementById("messages-end");
    if (element) {
      element.scrollIntoView();
    }
  }

  mapMessages() {
    let messagesArr = [];
    Object.values(this.props.messages).forEach((message, i) => {

      //if previous message author is the same:
      //construct a different li that omits profile pic and username
      let liElement;

      if (
        i !== 0 &&
        (message.author === Object.values(this.props.messages)[i - 1].author)
      ) {
        liElement = (
          <li key={i} className="message-item-container repeat">
            <div className="message-detail">
              <small>{message.createdAt}</small>
              <div className="message-detail-content">
                <span>{message.body}</span>
              </div>
            </div>
          </li>
        );
      } else {
        liElement = (
          <li key={i} className="message-item-container">
            <div className="message-detail">
              <img src="" className="message-detail-profile-picture"></img>
              <div className="message-detail-content">
                <div className="message-detail-top">
                  <p>{message.author}</p>
                  <small>{message.createdAt}</small>
                </div>
                <span>{message.body}</span>
              </div>
            </div>
          </li>
        );
      }

      messagesArr.push(liElement);
    });
    return messagesArr;
  }


  render() {

    let messageItems = [];
    if (Object.values(this.props.messages).length > 0) {
      messageItems = this.mapMessages();
    }
    console.log(this.props.currentChannel.title);

    return(
      <div id="message-feed">
        <ul id="chat-messages">
          {messageItems}
        </ul>
        <div id="messages-end"></div>
      </div>
    );
  }





}

export default MessageIndex;
