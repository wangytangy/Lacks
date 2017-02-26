import { receiveChannels, deleteChannel, joinChannel } from '../actions/channels_actions';
import { RECEIVE_ALL_CHANNELS, DELETE_CHANNEL, RECEIVE_JOIN_CHANNEL } from '../actions/channels_actions';



function ChannelsReducer(state = {}, action) {

  Object.freeze(state);
  let copyState;
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case DELETE_CHANNEL:
      copyState = Object.assign({}, state);
      delete copyState[action.channel.id];
      return copyState;
    case RECEIVE_JOIN_CHANNEL:
      copyState = Object.assign({}, state);
      copyState[action.joinedChannel.id] = action.joinedChannel;
      return copyState;
    default:
      return state;
  }
}

export default ChannelsReducer;
