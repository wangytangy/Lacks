import React from 'react';
import MessageFormContainer from './message_form_container';
import { Link } from 'react-router';

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

      let liElement;

      //if previous message author is the same:
      //construct a different li that omits profile pic and username
      if ((message.imageUrl || message.giphyUrl) && message.body === "") {
        let imgSrc;
        if (message.imageUrl.indexOf("missing") === 17 && message.giphyUrl === null) {
          imgSrc = null;
        } else if (message.giphyUrl) {
          imgSrc = message.giphyUrl;
        } else if (message.imageUrl) {
          imgSrc = message.imageUrl;
        }

        liElement = (
          <li key={i} className="message-item-container">
            <div className="message-detail">
              <img src="" className="message-detail-profile-picture"></img>
              <div className="message-detail-content">
                <div className="message-detail-top">
                  <p>{message.author}</p>
                  <small>{message.createdAt}</small>
                </div>
                <div className="message-image-container">
                  <img src={imgSrc}/>
                </div>
              </div>
            </div>
          </li>
        );
      } else if (
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

    let title;
    if (Object.keys(this.props.currentChannel).length > 0) {
      if (this.props.currentChannel.title.length > 50) {
        title = this.props.currentChannel.title.slice(0, 47) + "...";
      } else {
        title = this.props.currentChannel.title;
      }
    }

    let channelCreator;
    if (this.props.currentChannel.creator && !this.props.currentChannel.direct_message_status) {
      channelCreator = this.props.currentChannel.creator.username;
    }

    let channelDescrip;
    let channelPurpose;

    if (this.props.currentChannel.direct_message_status) {
      let members = this.props.currentChannel.title.split(',');
      members = members.join(', ');
      channelDescrip = "This is your direct message history with " + members;
      channelPurpose = "";
    } else {
      channelDescrip = ` created this channel on ${this.props.currentChannel.createdAt}`;
      channelPurpose = "Purpose: ";
    }

    let path = `messages/${this.props.currentChannel.id}`;
    return(
      <div id="message-feed">
        <ul id="chat-messages">
          <div id="message-feed-header">
            <Link to={path}><h2>#{title}</h2></Link>

            <div className="feed-header-title">
              <p className="feed-header-creator">{channelCreator}</p>
              <p>{channelDescrip}</p>

            </div>
            <div className="feed-header-info">
              <p>{channelPurpose}</p>
              <p className="feed-header-purpose">{this.props.currentChannel.description}</p>
            </div>
          </div>
          {messageItems}
        </ul>
        <div id="messages-end"></div>
      </div>
    );
  }
}

export default MessageIndex;
