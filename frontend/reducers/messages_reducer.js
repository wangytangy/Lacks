import { receiveAllMessages, receiveNewMessage} from '../actions/messages_actions';
import { RECEIVE_ALL_MESSAGES, RECEIVE_NEW_MESSAGE } from '../actions/messages_actions';
import merge from 'lodash/merge';


function MessagesReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_NEW_MESSAGE:

      // let newState = JSON.parse(JSON.stringify(state));
      // newState.push(action.message);
      let deepCopy = merge({}, state);
      deepCopy[action.message.id] = action.message;
      return deepCopy;
    default:
      return state;
  }
}

export default MessagesReducer;
