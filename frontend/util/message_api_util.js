export function createMessage(messageData) {

  return $.ajax({
    method: "POST",
    url: `/api/channels/${messageData.channelID}/messages`,
    data: { messages: { body: messageData.body } },

  });
}

export function createImageMessage(formData) {
  let channelID = parseInt(formData.get("messages[channel_id]"));
  return $.ajax({
    method: "POST",
    url: `/api/channels/${channelID}/messages`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
}

export function fetchAllMessages (channelID) {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelID}/messages`
  });
}
