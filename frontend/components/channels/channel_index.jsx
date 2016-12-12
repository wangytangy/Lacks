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

    this.state = { modalOpen: false, browseModalOpen: false, selected: this.props.params.id };
    this.redirect = this.redirect.bind(this);
    this.setSelected = this.setSelected.bind(this);
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

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.params.id });
  }


  redirect(id) {
    this.props.router.push(`messages/${id}`);
  }


  handleDelete(id) {
    this.props.deleteChannel(id).then((channel) =>{
      //if deleted channel_id is the currentChannel's id => redirect to #general
      //else nothing?

      //check if deleted channel is the currentChannel
      //if true, redirect to "general" (the first channel)
      let lastChannelsIdx = this.props.usersChannels.length - 1 || 0;
      if (this.props.usersChannels.length > 0 && this.props.currentChannel.id === channel.id) {
        this.redirect(this.props.usersChannels[lastChannelsIdx].id);
      }
    });
  }
  setSelected(channelID) {
    this.setState({selected: channelID});
  }

  mapChannelIndex() {

    let channelsIndex = [];
    //userChannels should be array of user's channels
    if (this.props.usersChannels.length > 0) {
      this.props.usersChannels.forEach((channel, i) => {
        let path = `messages/${channel.id}`;
        let deleteFn = this.handleDelete;
        let icon;

        if (i === 0 || channel.user_id !== this.props.currentUser.id) {
          deleteFn = () => {};
          icon = null;
        } else {
          icon = (
            <i
              className="material-icons delete-channel"
              onClick={() => deleteFn(channel.id)}>
              cancel
            </i>
          );
        }

        let highlightPresence;
        if (this.state.selected === `${channel.id}`) {
          highlightPresence = "group active";
        } else {
          highlightPresence = "group default";
        }


        let liElement = (<li
          onClick={() => this.setSelected(`${channel.id}`)}
          key={i}
          className={highlightPresence}>
            <Link to={path}>&#35; {channel.title}</Link>
            {icon}
          </li>);

          channelsIndex.push(liElement);
        }
      );
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
