import { receiveCurrentUser, receiveErrors, clearErrors } from '../actions/sessions_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/sessions_actions';


const defaultState = {
  currentUser: null,
  errors: []
};

function SessionReducer(state = defaultState, action) {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: [],
       };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors.responseJSON,
      };
    case CLEAR_ERRORS:
      return {
        currentUser: null,
        errors: []
      };
    default:
      return state;
  }
}

export default SessionReducer;

// LOGGED OUT
// {
//   session: {
//     currentUser: null,
//     errors: ["Invalid credentials"]
//   }
// }

// LOGGED IN
// {
//   session: {
//     currentUser: {
//       id: 1,
//       username: wangytangy
//     },
//     errors: ["Invalid credentials"]
//   }
// }
