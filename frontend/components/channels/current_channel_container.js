import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import { fetchAllChannels, fetchAChannel } from '../../actions/channels_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  channels: state.channels
});

const mapDispatchToProps = (dispatch) => ({
  fetchAChannel: (id) => dispatch(fetchAChannel(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentChannel));
