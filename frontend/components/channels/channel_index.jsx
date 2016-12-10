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

    this.state = { modalOpen: false, browseModalOpen: false };
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    if (this.props.channels[0] === undefined && this.props.location.pathname === "messages") {
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
    this.props.deleteChannel(id).then(() =>{
      //re-route to "/messages"
      this.redirect(this.props.channels[0].id);
      // this.props.router.push(`/messages/${Object.keys(this.props.channels)[0]}`);
      //componentWillReceiveProps will find a default channel (first one)
    });
  }

  mapChannelIndex() {

    let channelsIndex = [];
    // debugger
    if (this.props.channels.length > 0) {

      channelsIndex = this.props.channels.map((channel, i) => {

        let path = `messages/${channel.id}`;
        let deleteFn = this.handleDelete;
        let icon = (
            <i
              className="material-icons delete-channel"
              onClick={() => deleteFn(channel.id)}>
                cancel
              </i>
            );

        if (i === 0) {
          deleteFn = () => {};
          icon = null;
        }

        return <li
          key={i}
          className="group">
          <Link to={path}>&#35; {channel.title}
            {icon}
          </Link>
        </li>;
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
          onRequestClose={this.onBrowseModalClose}
          contentLabel = "browse-modal"
          >
          <BrowseChannelContainer />
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
