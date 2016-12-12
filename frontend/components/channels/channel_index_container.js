import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import {
  fetchAllChannels,
  createAChannel,
  deleteAChannel
} from '../../actions/channels_actions';
import { filterUsersChannels } from '../../util/selectors';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  usersChannels: filterUsersChannels(state.channels, state.session.currentUser.id),
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
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
