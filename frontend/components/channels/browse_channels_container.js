import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import BrowseChannel from './browse_channels';

const mapStateToProps = (state) => ({
  channels: state.channels,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseChannel));
