import React from 'react';
import Modal from 'react-modal';
import customStyle from '../modal_style';
import CreateChannelFormContainer from './create_channel_form_container';
import BrowseChannelContainer from './browse_channels_container';

import { Link } from 'react-router';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.mapChannelIndex = this.mapChannelIndex.bind(this);

    this.handleModalClick = this.handleModalClick.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.handleBrowseModalClick = this.handleBrowseModalClick.bind(this);
    this.onBrowseModalClose = this.onBrowseModalClose.bind(this);

    this.handleDelete = this.handleDelete.bind(this);

    this.state = { modalOpen: false, browseModalOpen: false, selected: 0 };
    this.redirect = this.redirect.bind(this);

    this.isMember = this.isMember.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname === "messages") {
      //if there a channel exists && pathname is "messages", go to that channel
      this.props.fetchAllChannels().then((channels) => {
        this.redirect(Object.keys(channels)[0]);
      });
    } else {
      //else, fetch the channels in all other cases
      this.props.fetchAllChannels();
    }
  }


  redirect(id) {
    this.props.router.push(`messages/${id}`);
  }


  handleDelete(id) {
    this.props.deleteChannel(id).then((channel) =>{
      //if deleted channel_id is the currentChannel's id => redirect to #general
      //else nothing?

      if (channel.id === this.props.currentChannel.id) {
        this.redirect(this.props.channels[0].id);
      }
    });
  }

  isMember(channel) {
    let bool = false;
    let currentUserID = this.props.currentUser.id;

    channel.members.forEach((user) => {
      if (user.id === currentUserID) {
        bool = true;
        return;
      }
    });
    return bool;
  }

  setSelected(i) {
    this.setState({selected: i});
  }

  isActive(value) {
    if (value === this.state.selected) {
      return 'group active';
    } else {
      return 'group default';
    }
  }


  mapChannelIndex() {

    let channelsIndex = [];
    if (Object.values(this.props.channels).length > 0) {
      Object.values(this.props.channels).forEach((channel, i) => {

        if (this.isMember(channel)) {
          let path = `messages/${channel.id}`;
          let deleteFn = this.handleDelete;
          let icon = (
            <i
              className="material-icons delete-channel"
              onClick={() => deleteFn(channel.id)}>
              cancel
            </i>
          );

          if (i === 0 || channel.user_id !== this.props.currentUser.id) {
            deleteFn = () => {};
            icon = null;
          }

          let liElement = (<li
            onClick={() => this.setSelected(i)}
            key={i}
            className={this.isActive(i)}>
              <Link to={path}>&#35; {channel.title}{icon}</Link>
            </li>);

          channelsIndex.push(liElement);
        }
      });
      return channelsIndex;
    } else {
      return channelsIndex;
    }
  }

  handleModalClick() {
    this.setState({modalOpen: true});
  }

  onModalOpen() {
    //toggles opacity of modal
    customStyle.content.opacity = 100;
  }

  onModalClose() {
    customStyle.content.opacity = 0;
    this.setState({modalOpen: false});
  }



  handleBrowseModalClick() {
    this.setState({browseModalOpen: true });
  }

  onBrowseModalClose() {
    customStyle.content.opacity = 0;
    this.setState({browseModalOpen: false});
  }



  render() {

    let channelsIndex = this.mapChannelIndex();
    return(
      <div className="channels group">

        <h1 className="channels-header">
          <Link onClick={this.handleBrowseModalClick}>
            channels &#40;{channelsIndex.length}&#41;
          </Link>
        </h1>
        <i className="material-icons create-channel"
          onClick={this.handleModalClick}>
          add_circle_outline
        </i>

        <ul className="channels-index">{channelsIndex}</ul>

        <Modal
          isOpen={this.state.browseModalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onBrowseModalClose}
          style={customStyle}
          contentLabel = "browse-modal">
          <i className="material-icons exit-icon" onClick={this.onBrowseModalClose}>
            highlight_off
          </i>
          <BrowseChannelContainer
            onBrowseModalClose={this.onBrowseModalClose}

            />
        </Modal>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onModalClose}
          style={customStyle}
          contentLabel=""
          >
          <i className="material-icons exit-icon" onClick={this.onModalClose}>
            highlight_off
          </i>

          <CreateChannelFormContainer
            onModalClose={this.onModalClose}
            />
        </Modal>


      </div>
    );
  }

}

export default ChannelIndex;
