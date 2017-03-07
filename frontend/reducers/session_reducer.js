import {
  receiveCurrentUser,
  receiveErrors,
  clearErrors,
  receiveProfilePic,
} from '../actions/sessions_actions';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  UPDATE_PROFILE_PIC,
} from '../actions/sessions_actions';


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
    case UPDATE_PROFILE_PIC:
      return {
        currentUser: action.user,
        errors: []
      }
    default:
      return state;
  }
}

export default SessionReducer;
