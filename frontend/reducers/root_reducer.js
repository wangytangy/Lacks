import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';
import CurrentChannelReducer from './current_channel_reducer';
import MessagesReducer from './messages_reducer';
import DirectMessagesReducer from './direct_messages_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  currentChannel: CurrentChannelReducer,
  messages: MessagesReducer,
  directMessages: DirectMessagesReducer,
  users: UsersReducer
});

export default rootReducer;
