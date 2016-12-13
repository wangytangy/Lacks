import * as APIUtil from '../util/message_api_util';

export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const receiveNewMessage = (message) => ({
  //copy all the "messages" slice of state, add this message to it
  type: RECEIVE_NEW_MESSAGE,
  message
});

export const receiveAllMessages = (messages) => ({
  //reset "messages" slice of state with fetch Messages
  type: RECEIVE_ALL_MESSAGES,
  messages
});


export const createAMessage = (messageData) => {
  return (dispatch) => {
    return APIUtil.createMessage(messageData).then((message) => {
    
      dispatch(receiveNewMessage(message));
    });
  };
};

export const fetchMessages = (channelID) => {
  return (dispatch) => {
    return APIUtil.fetchAllMessages(channelID).then((messages) => {
      dispatch(receiveAllMessages(messages));
    });
  };
};
