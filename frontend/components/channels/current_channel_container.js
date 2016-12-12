import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import { fetchAllChannels, fetchAChannel, leaveChannel } from '../../actions/channels_actions';
import { fetchMessages } from '../../actions/messages_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  channels: state.channels
});

const mapDispatchToProps = (dispatch) => ({
  fetchAChannel: (id) => dispatch(fetchAChannel(id)),
  fetchMessages: (channelID) => dispatch(fetchMessages(channelID)),
  leaveChannel: (channelID) => dispatch(leaveChannel(channelID))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentChannel));
