import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import { fetchAllChannels, fetchAChannel } from '../../actions/channels_actions';
import { fetchMessages } from '../../actions/messages_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAChannel: (id) => dispatch(fetchAChannel(id)),
  fetchMessages: (channelID) => dispatch(fetchMessages(channelID))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentChannel));
