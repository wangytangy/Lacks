import { receiveAllMessages } from '../actions/messages_actions';
import { RECEIVE_ALL_MESSAGES } from '../actions/messages_actions';


function MessagesReducer(state = [], action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export default MessagesReducer;
