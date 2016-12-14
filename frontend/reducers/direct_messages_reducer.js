import { receiveAllDirectMessages } from '../actions/direct_messages_actions';
import { RECEIVE_ALL_DIRECT_MESSAGES } from '../actions/direct_messages_actions';

function DirectMessagesReducer(state={}, action) {
  switch(action.type) {
    case RECEIVE_ALL_DIRECT_MESSAGES:
      return action.directMessages;
    default:
      return state;
  }
}

export default DirectMessagesReducer;
