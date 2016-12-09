import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import {
  fetchAllChannels,
  createAChannel,
  deleteAChannel
} from '../../actions/channels_actions';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  channels: state.channels
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllChannels: () => dispatch(fetchAllChannels()),
  createChannel: (channel) => dispatch(createAChannel(channel)),
  deleteChannel: (id) => dispatch(deleteAChannel(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex));
