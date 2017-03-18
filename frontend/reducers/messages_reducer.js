import { receiveAllMessages, receiveNewMessage} from '../actions/messages_actions';
import { RECEIVE_ALL_MESSAGES, RECEIVE_NEW_MESSAGE } from '../actions/messages_actions';

import { receiveProfilePic } from '../actions/sessions_actions';
import { UPDATE_PROFILE_PIC } from '../actions/sessions_actions';
import merge from 'lodash/merge';


function MessagesReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_NEW_MESSAGE:
      let deepCopy = merge({}, state);
      deepCopy[action.message.id] = action.message;
      return deepCopy;
    case UPDATE_PROFILE_PIC:
      deepCopy = merge({}, state);
      Object.keys(deepCopy).forEach((key) => {
        if (deepCopy[key].author === action.user.username) {
          deepCopy[key].avatar = action.user.avatarUrl;
        }
      });
      return deepCopy;
    default:
      return state;
  }
}

export default MessagesReducer;
