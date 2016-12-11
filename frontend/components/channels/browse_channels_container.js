import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import BrowseChannel from './browse_channels';
import { joinChannel } from '../../actions/channels_actions';

const mapStateToProps = (state) => ({
  channels: state.channels,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  joinChannel: (channelID) => dispatch(joinChannel(channelID))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseChannel));
