export function fetchChannels() {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  });
}

export function createChannel(channel) {
  return $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channels: channel }
  });
}

export function fetchAChannel(id) {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${id}`
  });
}

export function deleteAChannel(id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/channels/${id}`
  });
}
