import { receiveAllMessages, receiveNewMessage} from '../actions/messages_actions';
import { RECEIVE_ALL_MESSAGES, RECEIVE_NEW_MESSAGE } from '../actions/messages_actions';


function MessagesReducer(state = [], action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_NEW_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.message);
      return newState;
    default:
      return state;
  }
}

export default MessagesReducer;
