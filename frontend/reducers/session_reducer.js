import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';
import { receiveCurrentUser } from '../actions/sessions_actions';

const defaultState = {
  currentUser: null
};


function SessionReducer(state = defaultState, action) {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}

export default SessionReducer;

//separate reducer for errors
