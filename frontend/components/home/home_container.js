import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/sessions_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));


// LOGGED IN
// {
//   session: {
//     currentUser: {
//       id: 1,
//       username: wangytangy
//     },
//     errors: ["Invalid credentials"]
//   },
//   channels: {
//   1: {
  //   title: "sample channel title",
  //   user_id: 1,
    //   members: [
    //     { id: 1, username: "wangytangy" },
    //     { id: 2, username: "other_user" },
    //     { id: 3, username: "third_user" },
    //     { id: 4, username: "fourth_user" }
    //   ],
  // }
// }
