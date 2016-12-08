import { connect } from 'react-redux';
import CreateChannelForm from './create_channel_form';
import { createAChannel, fetchAllChannels } from '../../actions/channels_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';


const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel
});

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel) => dispatch(createAChannel(channel)),
  fetchAllChannels: () => dispatch(fetchAllChannels()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannelForm));
