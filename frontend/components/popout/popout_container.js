import { connect } from 'react-redux';
import Popout from './popout';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import { submitProfilePic } from '../../actions/sessions_actions';
import { getAvatar } from '../../reducers/avatar_selector';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.currentChannel,
  avatar: getAvatar(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateProfilePic: (imageData) => dispatch(submitProfilePic(imageData)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Popout));
