export function createMessage(messageData) {

  return $.ajax({
    method: "POST",
    url: `/api/channels/${messageData.channelID}/messages`,
    data: { messages: { body: messageData.body } },

  });
}

export function fetchAllMessages (channelID) {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelID}/messages`
  });
}
