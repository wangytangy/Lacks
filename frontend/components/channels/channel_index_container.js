import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchAllChannels, createAChannel } from '../../actions/channels_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  channels: state.channels
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllChannels: () => dispatch(fetchAllChannels()),
  createChannel: (channel) => dispatch(createAChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
