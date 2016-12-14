import { receiveAllUsers } from '../actions/direct_messages_actions';
import { RECEIVE_ALL_USERS } from '../actions/direct_messages_actions';

function UsersReducer(state=[], action) {
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}

export default UsersReducer;
