import { receiveNewChannel } from '../actions/channels_actions';
import { RECEIVE_NEW_CHANNEL } from '../actions/channels_actions';


function CurrentChannelReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEW_CHANNEL:
      return action.currentChannel;
    default:
      return state;
  }
}

export default CurrentChannelReducer;
