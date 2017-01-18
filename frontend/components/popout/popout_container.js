import { connect } from 'react-redux';
import Popout from './popout';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import { handleProfileUpdate } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.currentChannel

});

const mapDispatchToProps = (dispatch) => ({
  handleProfileUpdate: (profileData) => dispatch(handleProfileUpdate(profileData))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Popout));
